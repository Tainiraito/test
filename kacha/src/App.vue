<template>
  <div id="app">
    <NavHeader></NavHeader>
    <div class="main">
      <div class="aside-left"></div>
      <div class="flow">
        <FlowPanel v-for="(item, index) in 5" :key="index"></FlowPanel>
      </div>
      <div class="aside-right"></div>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import FlowPanel from './components/FlowPanel.vue'

export default {
  name: 'App',
  components: {
    NavHeader,FlowPanel
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main{
  background-color: #fafafa;
  flex: 1;
  display: flex;
}
.aside-left,.flow,.aside-right{
  flex: 1 1;
  padding: 24px;
}

</style>
