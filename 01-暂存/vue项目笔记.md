//markdown插件预览快捷键 `ctrl+shift+v`

0. 各种前置环境配置，node.js等

1. 脚手架配置。vue/cli，去官网安装: `npm install -g @vue/cli`

2. 开始项目。`vue create 【项目名】`

3. 引入三方库
   * 组件库（element、antd-for-vue）
        * element: 
            * 安装：`npm i element-ui`
            * 引入组件：`import ElementUI from 'element-ui';`
            * 引入样式：`import 'element-ui/lib/theme-chalk/index.css';`
            * 使用组件：`Vue.use(ElementUI);`
   * vuex（可选）
   * vue-router