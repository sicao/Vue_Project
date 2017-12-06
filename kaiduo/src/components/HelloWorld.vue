<template>
  <div class="hello">
    <header class="search" id="search">
      <div class="opc-change"></div>
      <div class="search-inner clearfixed">
        <div class="search-l">
          <input id="search_value" type="text" placeholder="满58元包邮  请输入药品名称">
        </div>
        <div class="search-r">登录</div>
      </div>
    </header>
    <div class="index-banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="img in imgList" :key="img.id">
          <a href="#"><img :src="img"></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>	
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
        autoplay: {
            stopOnLastSlide: true,
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgList:[
        "http://image.360kad.com/group2/M00/20/07/CgAgFVolJr-AXj0zAAKKpGXRTEM981.jpg",
        "http://image.360kad.com/group2/M00/20/27/CgAgFVol756AETyWAAFte1sJyMw492.jpg",
        "http://image.360kad.com/group2/M00/1F/D1/CgAgFVokr1KAbHWxAAH5wgh_JkM240.jpg",
        "http://image.360kad.com/group2/M00/1F/D9/CgAgFVokwMqAYFsxAAG5WqbngIU878.jpg",
        "http://image.360kad.com/group2/M00/1E/49/CgAgFVoeiEeAA8BEAAFagjDLOX0420.png",
        "http://image.360kad.com/group2/M00/1E/D7/CgAgFVogvRSARxfwAAFbc9evGk8061.jpg",
        "http://image.360kad.com/group2/M00/1D/AE/CgAgFVocwMeAXEZBAAF12q3azYk918.jpg",
        "http://image.360kad.com/group2/M00/1D/80/CgAgFVob4vqAZg36AAGSO-a9ePI675.jpg"
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*-----------------------首页-----------------------*/
img {
    width: 100%;
    margin: 0;
    padding: 0;
    /* vertical-align: top; */
    display: block;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
/*----------头部---------------*/
.search {
    width: 100%;
    height: .92rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
}
.opc-change {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: .92rem;
    opacity: 0.85;
    background: -webkit-linear-gradient(top, #4b0a18, #fb2250);
}
.search-inner{
    position: absolute;
    top: .14rem;
    left: 4%;
    width: 92%;
    height: .64rem;
    overflow: hidden;
}
.search-l {
    float: left;
    width: 88%;
    height: .64rem;
    background-color: #f8f8f8;
    border-radius: .4rem;
}
.search-r {
    float: right;
    width: 9%;
    font-size: .3rem;
    color: white;
    height: .64rem;
    line-height: .64rem;
}
.search-l input {
    background: #f8f8f8 url(../assets/img/search_logo.png) no-repeat .25rem .18rem;
    background-size: .3rem .3rem;
    text-indent: .65rem;
    color: #898989;
    width: 100%;
    height: .64rem;
    line-height: .64rem;
    border-radius: .4rem;
    font-family: "微软雅黑";
    font-size: .28rem;
    margin: 0;
    padding: 0;
}
/*-----------图片轮播-----------------*/
.index-banner{
    width: 100%;
    height: 3.3rem;
}
.index-banner img{
    width: 100%;
    height: 3.3rem;
}
</style>
