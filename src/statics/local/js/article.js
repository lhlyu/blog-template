$(function() {
    editormd.markdownToHTML("yu-article-content", {
        htmlDecode      : "style,script,iframe",  // you can filter tags decode
        emoji           : true,
        taskList        : true,
        tex             : true,  // 默认不解析
        flowChart       : true,  // 默认不解析
        sequenceDiagram : true,  // 默认不解析
        lineWrapping         : false,
    });

    var OwO_demo = new OwO({
        logo: 'OωO表情',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementsByClassName('OwO-textarea')[0],
        api: './statics/third-party/owo/OwO.json',
        position: 'up',
        width: '100%',
        maxHeight: '250px'
    });
})