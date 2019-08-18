<template>
   <div>
     <ul class="detail">
       <li>
         <div class="top van-hairline--bottom">
           <div class="left">
             <img src="../../../static/images/top1.png" alt="" class="topImg">
             <img src="../../../static/images/img.png" alt="" class="imgUrl">
           </div>
           <div class="right">
             <p class="p1">鼓楼刀削面</p>
             <div class="div1">
               <star score="4.5"></star>
               <p class="p2">非常好</p>
               <p class="p3">23评论</p>
             </div>
             <div class="div2">
               <span class="p4">大同刀削面</span>
               <span class="p4">大同扒肉条</span>
             </div>
             <div class="div3">
               <div>
                 <img src="../../../static/images/add.png" alt="">
                 <span class="p5">大同鼓楼街23号</span>
               </div>
               <div>
                 <span class="p6">人均:</span><span class="p7">￥26</span>
               </div>
             </div>
           </div>
         </div>
         <div class="bottom">
           <img src="../../../static/images/comment.png"  alt="">
           <span>大同老城鼓楼旁边的这家面辊，浓郁的正宗大同味道...</span>
         </div>
       </li>
       <li>
         <div class="top van-hairline--bottom">
           <div class="left">
             <img src="../../../static/images/img.png" alt="" class="imgUrl">
           </div>
           <div class="right">
             <p class="p1">鼓楼刀削面</p>
             <div class="div1">
               <star score="4"></star>
               <p class="p2">非常好</p>
               <p class="p3">23评论</p>
             </div>
             <div class="div2">
               <span class="p4">大同刀削面</span>
               <span class="p4">大同扒肉条</span>
             </div>
             <div class="div3">
               <div>
                 <img src="../../../static/images/add.png" alt="">
                 <span class="p5">大同鼓楼街23号</span>
               </div>
               <div>
                 <span class="p6">人均:</span><span class="p7">￥26</span>
               </div>
             </div>
           </div>
         </div>
         <div class="bottom">
           <img src="../../../static/images/comment.png"  alt="">
           <span>大同老城鼓楼旁边的这家面辊，浓郁的正宗大同味道...</span>
         </div>
       </li>
     </ul>
   </div>
</template>

<script>
   import star from '../star/star'
    export default {
        name: "detail",
        data(){
          return {
             list:[
               {
                 name:''
               }
             ]
          }
        },
       components:{
         star
       }
    }
</script>

<style scoped>
.detail li{
  height:344px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 27px 0px rgba(41,42,50,0.07);
  border-radius:6px;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 16px;
  list-style: none;
  cursor: pointer;
}
.detail li .top{
 display: flex;
  align-items: center;
  padding-bottom: 18px;
}
.detail li .top .left{
  width: 180px;
  height: 210px;
  margin-right: 28px;
  position: relative;
}
.detail li .top .left .imgUrl{
  width: 180px;
  height: 210px;
}
.detail li .top .right{
  flex-grow: 1;
}
.detail li .top .right .p1{
  font-size:32px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(48,49,57,1);
}
.detail li .top .right .p2{
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin: 10px 15px;
}
.detail li .top .right .p3{
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(178,178,179,1);
}
.detail li .top .right .p4{
 padding: 0 8px;
  height:40px;
  background:rgba(255,100,109,1);
  border-radius:5px;
  text-align: center;
  line-height: 43px;
  margin-right: 14px;
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.detail li .top .right .p5{
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(170,170,170,1);
}
.detail li .top .right .p6{
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(255,5,5,1);
}
.detail li .top .right .p7{
  font-size:36px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(255,5,5,1);
}
.detail li .top .right .div1{
  display: flex;
  align-items: center;
}
.detail li .top .right .div2{
  display: flex;
  align-items: center;
}
.detail li .top .right .div3{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.detail li .top .right .div3>div{
  display: flex;
  align-items: center;
}
.detail li .top .right .div3 img{
  width: 20px;
  height: 22px;
  margin-right: 4px;
}
.bottom{
  display: flex;
  align-items: center;
  font-size:24px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(178,178,179,1);
  height: 81px;
}
  .bottom img{
    width: 26px;
    height: 24px;
    margin-right: 6px;
  }
  .bottom span{
    max-width: 580px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .left1{
    background: url("../../../static/images/top1.png") no-repeat top;
    z-index: 10;
  }
  .topImg{
    position: absolute;
    width: 135px;
    height: 37px;
    left: 22px;
    top: 0;
  }
</style>
