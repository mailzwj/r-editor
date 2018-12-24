import React, { Component } from 'react';
import { render } from 'react-dom';

import REditor from '../';

import './index.less';

// console.log(REditor);

const mentionList = [
    {
        pin: 'abcdef',
        nickName: 'Abc.Def'
    },
    {
        pin: 'ghijkl',
        nickName: 'Ghi·Jkl'
    },
    {
        pin: 'mnopq',
        nickName: 'M.NoPQ'
    }
];

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            result: '',
            serializeResult: ''
        };
    }

    componentDidMount() {
        //
    }

    getEditorContent = (data) => {
        const { rows = [] } = data;
        let msgArr = rows.map(r => {
            return r.content;
        });
        const newMsg = msgArr.join('<br/>');
        // console.log(newMsg);
        this.setState({
            result: newMsg
        });
    }

    closeResult = () => {
        this.setState({
            result: ''
        });
    }

    getEditor = (editor) => {
        this.msgEditor = editor;
    }

    getHtml = () => {
        if (this.msgEditor) {
            console.log(this.msgEditor.getHtml());
            this.setState({
                serializeResult: this.msgEditor.getHtml()
            });
        }
    }

    getJson = () => {
        if (this.msgEditor) {
            this.setState({
                serializeResult: JSON.stringify(this.msgEditor.getJson(), null, 4)
            });
        }
    }

    render() {
        return (
            <div className="cw" id="J_CW">
                <div className="row">
                    <REditor value="简易版，不支持Mention（提到）功能，输入“:”触发表情选择（使用默认表情列表）<br/>支持粘贴图文/图片/截图<br/>Enter查看内容，Ctrl/Command+Enter换行" onFinish={this.getEditorContent} />
                </div>
                <div className="row row2">
                    <REditor
                        ref={this.getEditor}
                        value="输入“@”选提到的人，输入“:”触发表情选择（使用默认表情列表），支持粘贴图文/图片/截图"
                        mentionList={mentionList}
                        onFinish={this.getEditorContent} />
                    <div className="output">
                        <div className="act">
                            <input type="button" onClick={this.getHtml} value="Get html" />
                            <input type="button" onClick={this.getJson} value="Get json" />
                        </div>
                        <textarea className="ta" readOnly value={this.state.serializeResult} />
                    </div>
                </div>
                <div className="row">
                    <REditor 
                        value="Enter键换行，Ctrl/Command+Enter键获取内容"
                        mentionList={mentionList}
                        finishKey="CtrlOrCmd+Enter"
                        onFinish={this.getEditorContent} />
                </div>
                <div className={this.state.result ? 'result show' : 'result'}>
                    <div className="title">
                        <h3>输入内容如下:</h3>
                        <span className="close" onClick={this.closeResult}>关闭</span>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.result}} />
                </div>
            </div>
        );
    }
}

const page = document.createElement('div');
page.style.height = '100%';
document.body.appendChild(page);

render(<Demo />, page);
