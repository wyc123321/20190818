<template>
  <div>
    <header class="header">
      <img src="../../../static/images/home-logo.png" alt="">
    </header>
    <div class="indexSwipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>

    <ul class="ulList">
      <li @click="go">
        <p>
          <img src="../../../static/images/line.png" alt="">
          <span>热门推荐</span>
        </p>
        <div class="divContainer">
          <div class="left left1">
            <img src="../../../static/images/icon1.png" alt="">
          </div>
          <div class="right">
            <div class="rightDiv rightDiv1" v-for="(item,index) in 6">
              <span>小二生鲜</span>
            </div>
          </div>
        </div>
      </li>
      <li @click="go">
        <p>
          <img src="../../../static/images/line.png" alt="">
          <span>美食美味</span>
        </p>
        <div class="divContainer">
          <div class="left left2">
            <img src="../../../static/images/icon2.png" alt="">
          </div>
          <div class="right">
            <div class="rightDiv rightDiv2" v-for="(item,index) in 6">
              <span>小二生鲜</span>
            </div>
          </div>
        </div>
      </li>
      <!--<li @click="go">-->
      <!--<p>-->
      <!--<img src="../../../static/images/line.png" alt="">-->
      <!--<span>美食美味</span>-->
      <!--</p>-->
      <!--<div class="divContainer">-->
      <!--<div class="left left3">-->
      <!--<img src="../../../static/images/icon3.png" alt="">-->
      <!--</div>-->
      <!--<div class="right">-->
      <!--<div class="rightDiv rightDiv3" v-for="(item,index) in 6">-->
      <!--<span>小二生鲜</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <li >
        <p>
          <img src="../../../static/images/line.png" alt="">
          <span>休闲娱乐</span>
        </p>
        <div class="swiper-container swiper-container1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="go">
              <div class="divContainer divContainer1">
                <div class="left left3">
                  <img src="../../../static/images/icon3.png" alt="">
                </div>
                <div class="right">
                  <div class="rightDiv rightDiv3" v-for="(item,index) in 6">
                    <span>小二生鲜</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide" @click="go">
              <div class="divContainer divContainer1">
                <div class="left left3">
                  <img src="../../../static/images/icon3.png" alt="">
                </div>
                <div class="right">
                  <div class="rightDiv rightDiv3" v-for="(item,index) in 6">
                    <span>小二生鲜1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </li>
      <li @click="go">
        <p>
          <img src="../../../static/images/line.png" alt="">
          <span>同城热购</span>
        </p>
        <div class="divContainer">
          <div class="left left4">
            <img src="../../../static/images/icon4.png" alt="">
          </div>
          <div class="right">
            <div class="rightDiv rightDiv4" v-for="(item,index) in 6">
              <span>小二生鲜</span>
            </div>
          </div>
        </div>
      </li>
      <li @click="go">
        <p>
          <img src="../../../static/images/line.png" alt="">
          <span>生活服务</span>
        </p>
        <div class="divContainer">
          <div class="left left5">
            <img src="../../../static/images/icon5.png" alt="">
          </div>
          <div class="right">
            <div class="rightDiv rightDiv5" v-for="(item,index) in 6">
              <span>小二生鲜</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "login",
    data() {
      return {
        images: [
          require('../../../static/images/img1.png'),
          require('../../../static/images/img2.png')
        ],
        categorys: [],
      }
    },
    methods: {
      go() {
        this.$router.push('/detail')
      }
    },
    created() {

    },
    mounted() {
      new Swiper('.swiper-container', {
        // loop: true, // 可以循环轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    },
    watch: {
      categorys(value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          // new Swiper('.swiper-container', {
          //   loop: true, // 可以循环轮播
          //   // 如果需要分页器
          //   pagination: {
          //     el: '.swiper-pagination',
          //   },
          //   // 如果需要前进后退按钮
          //   navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          //   }
          // })
        })
      }
    },
  }
</script>

<style scoped>
  .header {
    height: 88px;
    background: rgba(255, 100, 109, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header img {
    width: 193px;
    height: 46px;
  }

  .indexSwipe img {
    width: 100%;
    display: block;
  }

  .ulList li {
    height: 300px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 27px 0px rgba(41, 42, 50, 0.07);
    border-radius: 6px;
    box-sizing: border-box;
    margin-bottom: 20px;
    list-style: none;
    cursor: pointer;
    width: 100%;
    padding: 26px 0;
  }

  .ulList li > p {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-left: 26px;
  }

  .ulList li .divContainer {
    display: flex;
    align-items: inherit;
    justify-content: space-between;
    margin: 20px 26px 0;
  }

  .ulList li .divContainer1 {
    display: flex;
    align-items: inherit;
    justify-content: space-between;
    margin: 20px 0 0;
  }

  .ulList li > p > img {
    width: 6px;
    height: 30px;
    margin-right: 16px;
  }

  .ulList li .left {
    width: 162px;
    height: 174px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
    flex-shrink: 0;
  }

  .ulList li .left img {
    width: 90px;
    height: 90px;
  }

  .ulList li .left1 {
    background: rgba(255, 103, 102, 1);
  }

  .ulList li .left2 {
    background: rgba(253, 181, 63, 1);
  }

  .ulList li .left3 {
    background: rgba(42, 180, 255, 1);
  }

  .ulList li .left4 {
    background: rgba(162, 115, 255, 1);
  }

  .ulList li .left5 {
    background: rgba(55, 212, 167, 1);
  }

  .ulList li .right {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  .ulList li .right .rightDiv {
    width: 162px;
    height: 80px;
    border-radius: 6px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 254, 254, 1);
  }

  .ulList li .right .rightDiv:nth-child(2) {
    margin-right: 16px;
    margin-left: 16px;
  }

  .ulList li .right .rightDiv:nth-child(5) {
    margin-right: 16px;
    margin-left: 16px;
  }

  .ulList li .right .rightDiv1 {
    background: url("../../../static/images/card1.png") no-repeat center;
  }

  .ulList li .right .rightDiv2 {
    background: url("../../../static/images/card2.png") no-repeat center;
  }

  .ulList li .right .rightDiv3 {
    background: url("../../../static/images/card3.png") no-repeat center;
  }

  .ulList li .right .rightDiv4 {
    background: url("../../../static/images/card4.png") no-repeat center;
  }

  .ulList li .right .rightDiv5 {
    background: url("../../../static/images/card5.png") no-repeat center;
  }

  .swiper-container1.swiper-container .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    width: 44px;
    height: 110px;
    background: url("../../../static/images/right.png") no-repeat center;
    background-size: 100%;
    right: 0px;
    margin-top: -55px;
  }

  .swiper-container1.swiper-container .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    width: 44px;
    height: 110px;
    background: url("../../../static/images/left.png") no-repeat center;
    background-size: 100%;
    left: 0px;
    margin-top: -55px;
  }

  .swiper-container1 .swiper-slide {
    padding: 0 26px;
    box-sizing: border-box;
  }
</style>
