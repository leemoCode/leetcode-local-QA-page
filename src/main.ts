import { createApp } from "vue";
import App from "./App.vue";

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/brown-paper.css'  //导入代码高亮样式

const app = createApp(App)

app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})
app.mount("#app");
