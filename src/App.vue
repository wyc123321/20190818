<template>
  <div id="app">
    <router-view/>
    <img src="../static/images/code.jpg" alt="" class="codeImg" v-if="isPc">
  </div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return {
        isPc:false
      }
    },
    created() {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        this.isPc = false;
      } else {
        this.isPc = true;
      }
    }
  }
</script>
<!--<style lang="less">-->
  <!--@import '~vux/src/styles/reset.less';-->
  <!--@import '~vux/src/styles/1px.less';-->
<!--</style>-->
<style>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    max-width: 750px;
    margin: 0 auto;
    position: relative;
  }
  .codeImg{
    width: 150px;
    height: 150px;
    position: absolute;
    top: 200px;
    right: -300px;
  }
</style>
