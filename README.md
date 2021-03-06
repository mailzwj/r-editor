## REACT消息编辑器

### 预览

![REditor](http://seejs.me/r-editor/editor.gif)

[在线预览](http://seejs.me/r-editor/demo/index.html)

### 安装

```bash
npm install --save @mailzwj/r-editor
```

### 使用方法

* ES6 Module
```jsx
import REditor from '@mailzwj/r-editor';

<REditor 
    value="Enter键换行，Ctrl/Command+Enter键获取内容"
    mentionList={mentionList}
    finishKey="CtrlOrCmd+Enter"
    onFinish={this.getEditorContent} />
```

### props

* `value<String>`: 编辑器初始化默认内容
* `mentionList<Array>`: 提到联系人列表，不传则不启用提到功能。元素为包含`pin`和`nickName`字段的对象，详见[demo](http://seejs.me/r-editor/demo/index.html)
* `finishKey<String>`: 触发输入完成的快捷键：`Enter`/`Ctrl+Enter`/`Cmd+Enter`/`CtrlOrCmd+Enter`，默认`Enter`
* `onFinish<Function>`: 接收编辑器中内容的函数，触发`finishKey`的时候调用
* `emojiList<Array>`: 自定义表情列表，不传则使用默认表情。元素为包含`title`、`title_cn`、`url`的对象，详见[demo](http://seejs.me/r-editor/demo/index.html)

### 实例方法

* `getHtml()`: 返回编辑器内部的HTML代码
* `getJson()`: 以JSON格式返回编辑器内部的数据，`rows`数组存储每行的数据

### 功能列表

- [x] 文本输入
- [x] 表情输入
- [x] 粘贴内容(内容去格式)
- [x] 粘贴图片文件
- [x] 粘贴截图
- [x] 点选图片或提到块
- [x] 查看大图(双击编辑器中的图片)
- [ ] 提到组件自定义
- [ ] 表情组件自定义
- [ ] 序列化内容
- [ ] 其他
