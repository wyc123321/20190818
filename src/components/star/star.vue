<template>
  <div id="star">
    <span v-for="classn in starArrs" :class="classn" class="staritem"></span>
    <!--<span class="staritem onstar"></span>
    <span class="staritem onstar"></span>
    <span class="staritem halfstar"></span>
    <span class="staritem offstar"></span>-->
    <!--根据传递过来的分数得到对应的星星
      4.7   四颗半星
      1个位数代表的是全里亮，
      2，当分数大于等于0.5 是一个半星
      3.当全星和半星不足五个的时候，剩下的都是灰色的星星
    -->
  </div>
</template>

<script>
  export default{
    props:['score'],
    created(){
      console.log("子组件");
    },
    mounted(){
      console.log("打印传递的分数");
    },
    computed:{
      starArrs(){
        var starArr=[];  //3.9
//       全星星的个数
        let onstar = parseInt(this.score);
        console.log(onstar)
//       是否有半星
        let halfStar = Math.round(this.score-onstar)?true:false;
//       有多少课灰色的星星
        for (var i=0;i<onstar;i++) {
          starArr.push('onstar')
        }
        if(halfStar){
          starArr.push('halfstar')
        }
        while(starArr.length<5){
          starArr.push('offstar')
        }
        return starArr;
      }
    }
  }
</script>

<style scoped>
  /*独立作用域的样式*/
  #star{
    display: flex;
    align-items: center;
  }
  .staritem{
    width: 23px;
    height: 22px;
    margin-right: 4px;
  }
  /*全星星*/
  .onstar{
    background: url('../../../static/images/star-light.png') no-repeat center;
    background-size: 100%;
    width: 23px;
    height: 22px;
  }
  .halfstar{
    background: url('../../../static/images/half.png') no-repeat center;
    background-size: 100%;
    width: 23px;
    height: 22px;
  }
  .offstar{
    background: url('../../../static/images/star-grey.png') no-repeat center;
    background-size: 100%;
    width: 23px;
    height: 22px;
  }
</style>
