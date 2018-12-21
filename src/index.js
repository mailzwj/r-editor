import React, { Component } from 'react';

import './index.less';

const ua = navigator.userAgent;
const browser = {
    safari: ua.match(/version\/[\d\.]+\ssafari\/[\d\.]+/i),
    chrome: ua.match(/chrome\/[\d\.]+/i),
    firefox: ua.match(/firefox\/[\d\.]+/i)
};

const emojis = [
    {
        title: 'Heart',
        title_cn: '心',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s01.png'
    },
    {
        title: 'Touch',
        title_cn: '摸头',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s02.png'
    },
    {
        title: 'Dis',
        title_cn: '鄙视',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s03.png'
    },
    {
        title: 'Daku',
        title_cn: '大哭',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s04.png'
    },
    {
        title: 'Laugh',
        title_cn: '大笑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s05.png'
    }
];

class ChatEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMention: false,
            showEmoji: false
        };
    }

    componentDidMount() {
        this.focusEditor();
    }

    focusEditor = () => {
        if (this.editor) {
            this.editor.focus();
        }
    }

    clearEditor = () => {
        if (this.editor) {
            this.editor.innerHTML = '';
        }
    }

    onInput = (ev) => {
        // console.log(ev);
        const content = ev.target.innerText;
        if (!content) {
            ev.target.innerHTML = '<br/>';
        }
        const selections = window.getSelection();
        const range = selections.getRangeAt(0);
        this.lastRange = range;
        if (range.startOffset > 0) {
            range.setStart(range.startContainer, range.startOffset - 1);
            const lastChar = range.toString();
            range.collapse();
            if (lastChar === '@') {
                this.setState({
                    showMention: true
                });
                document.removeEventListener('click', this.hideMention, false);
                document.addEventListener('click', this.hideMention, false);
            } else if (lastChar === ':') {
                this.setState({
                    showEmoji: true
                });
                document.removeEventListener('click', this.hideEmoji, false);
                document.addEventListener('click', this.hideEmoji, false);
            } else {
                document.removeEventListener('click', this.hideMention, false);
                document.removeEventListener('click', this.hideEmoji, false);
                this.setState({
                    showEmoji: false,
                    showMention: false
                });
            }
        }
    }

    hideMention = () => {
        this.setState({
            showMention: false
        });
    }

    hideEmoji = () => {
        this.setState({
            showEmoji: false
        });
    }

    // onBlur = () => {
    //     const selections = window.getSelection();
    //     const range = selections.getRangeAt(0);
    //     this.lastRange = range;
    // }

    onFocus = () => {
        if (!this.lastRange) {
            return;
        }
        const selections = window.getSelection();
        selections.removeAllRanges();
        selections.addRange(this.lastRange);
    }

    insertMention = (ev, m) => {
        // console.log('Insert');
        ev.stopPropagation();
        if (!this.editor) {
            return;
        }
        this.editor.focus();
        document.execCommand('delete');
        const selections = window.getSelection();
        const range = selections.getRangeAt(0);
        let nextChar;
        const newNode = document.createElement('span');
        try {
            range.setEnd(range.endContainer, range.endOffset + 1); // 末尾+1会溢出，导致抛出异常
            nextChar = range.toString();
            range.collapse(true);
        } catch(e) {}
        newNode.className = 'at-user';
        newNode.setAttribute('data-pin', m.pin);
        newNode.setAttribute('data-nick-name', m.nickName);
        newNode.innerText = '@' + m.nickName;
        newNode.setAttribute('contentEditable', false);
        range.insertNode(newNode);
        browser.safari && selections.addRange(range);
        selections.collapseToEnd();
        if (!nextChar) {
            document.execCommand('insertHtml', null, '<br/>');
        }
    }

    insertEmoji = (ev, e) => {
        ev.stopPropagation();
        if (!this.editor) {
            return;
        }
        this.editor.focus();
        document.execCommand('delete');
        const selections = window.getSelection();
        const range = selections.getRangeAt(0);
        const newNode = document.createElement('img');
        newNode.className = 'sys-emoji';
        newNode.setAttribute('data-code', e.url.substr(-7, 3));
        newNode.setAttribute('src', e.url);
        range.insertNode(newNode);
        browser.safari && selections.addRange(range);
        selections.collapseToEnd();
        // document.execCommand('insertHtml', null, '<br/>');
    }

    insertImageFile = (src) => {
        if (!this.editor) {
            return;
        }
        this.editor.focus();
        const selections = window.getSelection();
        const range = selections.getRangeAt(0);
        const newNode = document.createElement('img');
        newNode.className = 'paste-image';
        newNode.setAttribute('src', src);
        range.insertNode(newNode);
        browser.safari && selections.addRange(range);
        selections.collapseToEnd();
    }

    insertHtml = (html) => {
        html = html || '';
        if (!this.editor) {
            return;
        }
        this.editor.focus();
        document.execCommand('insertHtml', false, html);
    }

    onPaste = (ev) => {
        const dataTransfer = ev.clipboardData;
        if (dataTransfer.files && dataTransfer.files.length) {
            // files
            for (let f = 0, flen = dataTransfer.files.length; f < flen; f++) {
                const file = dataTransfer.files[f];
                // console.log(file);
                let reader = new FileReader();
                reader.addEventListener('load', (ev) => {
                    const target = ev.target;
                    const src = target.result;
                    this.insertImageFile(src);
                    reader = null;
                });
                reader.readAsDataURL(file);
            }
            ev.preventDefault();
        } else if (dataTransfer.items && dataTransfer.items.length) {
            for (let i = 0, len = dataTransfer.items.length; i < len; i++) {
                if (dataTransfer.items[i].type === 'text/html') {
                    const rich = dataTransfer.items[i];
                    rich.getAsString((rs) => {
                        // 清除img标签以外的所有标签
                        rs = rs.replace(/<\/?(?!img)([\s\S]+?)>/g, '');
                        // 格式化图片标签
                        // 方式一：去除style标签
                        // rs = rs.replace(/\s+style=("|')[^\1]*\1/g, '');
                        // 方式二：只保留src属性，追加class属性
                        rs = rs.replace(/(<img)([\s\S]*?)(\ssrc=("|')[^\4]*?\4)[^>]+?>/g, ($, $1, $2, $3, $4) => {
                            return $1 + ' class="paste-image"' + $3 + '>';
                        });
                        // console.log(rs);
                        this.insertHtml(rs);
                    });
                    break;
                }
            }
            ev.preventDefault();
        }
    }

    convertToJson = (nodes) => {
        const rs = {
            rows: []
        };
        let rowCount = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes.forEach(n => {
            let item;
            if (n.nodeType === 1) { // Element
                let content;
                if (n.tagName.toLowerCase() === 'div') {
                    rowCount++;
                    content = n.innerHTML;
                } else {
                    content = n.outerHTML;
                }
                item = rs.rows[rowCount] || {source: [], content: ''};
                item.source.push(n);
                item.content += content || '';
            } else if (n.nodeType === 3) { // Text
                item = rs.rows[rowCount] || {source: [], content: ''};
                item.source.push(n);
                item.content += (n.data || n.nodeData || '');
            } else {
                item = rs.rows[rowCount] || {source: [], content: ''};
                item.source.push(n);
                item.content += n.toString();
            }
            rs.rows[rowCount] = item;
        });
        return rs;
    }

    onKeyDown = (ev) => {
        // 回车
        if (ev.keyCode === 13) {
            const _props = this.props || {};
            const { finishKey = 'Enter', onFinish } = _props;
            const editor = this.editor;
            let editorData;
            switch(finishKey.replace(/\s+/g, '')) {
                case 'Enter':
                    if (!(ev.ctrlKey || ev.metaKey)) {
                        const html = editor.childNodes;
                        editorData = this.convertToJson(html);
                        ev.preventDefault();
                    } else {
                        document.execCommand('insertParagraph');
                    }
                    break;
                case 'Ctrl+Enter':
                    if (ev.ctrlKey) {
                        const html = editor.childNodes;
                        editorData = this.convertToJson(html);
                    }
                    break;
                case 'Cmd+Enter':
                    if (ev.metaKey) {
                        const html = editor.childNodes;
                        editorData = this.convertToJson(html);
                    }
                    break;
                case 'CtrlOrCmd+Enter':
                    if (ev.ctrlKey || ev.metaKey) {
                        const html = editor.childNodes;
                        editorData = this.convertToJson(html);
                    }
                    break;
            }
            if (editorData) {
                typeof onFinish === 'function' && onFinish(editorData);
                this.clearEditor();
            }
        }
    }

    setEditor = (editor) => {
        this.editor = editor;
    }

    render() {
        const _props = this.props || {};
        const _state = this.state || {};
        const { mentionList = [], emojiList = emojis, value } = _props;
        return (
            <div className="chat-editor" onClick={this.focusEditor}>
                {mentionList.length && _state.showMention ?
                    <div className="mention-list">
                        {
                            mentionList.map(m => {
                                return (
                                    <div className="mention"
                                        key={m.pin}
                                        onClick={(ev) => this.insertMention(ev, m)}
                                    >
                                        {m.nickName}
                                    </div>
                                );
                            })
                        }
                    </div>
                : null}
                {emojiList.length && _state.showEmoji ?
                    <div className="emoji-list">
                        {
                            emojiList.map(e => {
                                return (
                                    <div className="emoji"
                                        key={e.title}
                                        title={e.title_cn}
                                        onClick={(ev) => this.insertEmoji(ev, e)}
                                    >
                                        <img src={e.url} />
                                    </div>
                                );
                            })
                        }
                    </div>
                : null}
                <div className="editor"
                    // ref="editor"
                    ref={this.setEditor}
                    contentEditable={true}
                    onInput={this.onInput}
                    // onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onPaste={this.onPaste}
                    onKeyDown={this.onKeyDown}
                    dangerouslySetInnerHTML={{__html: value || '<br/>'}}
                />
            </div>
        );
    }
}

export default ChatEditor;
