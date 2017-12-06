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
    <nav class="navlist">
      <ul class="clearfix">
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8KsSAMkg1AAAM1UHLKkQ187.png" alt="全部分类"></p>
          <p>全部分类</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8Kw-ABjPqAAAMMx7VPjU331.png" alt="自助找药"></p>
          <p>自助找药</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8Kz-Ac8sIAAAMpTHQrPc757.png" alt="每日签到"></p>
          <p>每日签到</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p class="nav-item-img"><img src="http://image.360kad.com/group2/M00/14/62/CgAgFVn8K2GAVIsAAAAKsRwt1n0652.png" alt="查看物流"></p>
          <p>查看物流</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFVn8K3yAR1utAAAMAncGfHA538.png" alt="男科频道"></p>
          <p>男科频道</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K5CAY5HdAAALX7YhN1I375.png" alt="女性频道"></p>
          <p>女性频道</p></a>
       </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K62AK5qhAAAL9Cc3hug946.png" alt="养生超市"></p>
          <p>养生超市</p></a>
        </li>
        <li class="nav-item"><a href="#">
          <p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K8SAHEiTAAAMtptmya4325.png" alt="健康头条"></p>
          <p>健康头条</p></a>
        </li>
      </ul>
    </nav>
    <div style="width: 100%">
      <a href="#">
        <img style="width: 100%;vertical-align: top;" src="http://image.360kad.com/group2/M00/20/08/CgAgFVolKo2AQAU-AADLZTOL3cc074.gif">
      </a>
    </div>	
    <section class="seclist">
      <section class="health_h">
        <div class="health_c clearfix">
          <div class="health_logo">
            <img src="http://res1.360kad.com/theme/default/img/promotions/lifeng/20170726/m/health.jpg" alt="">
          </div>
          <div class="health_lunbo clearfix">
            <ul class="clearfix">
              <li>
                <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFcGAfFZDAAALa9Y4Sds309.jpg">
                <a href="http://m.360kad.com/jknews/jksc/fejk/3689005.shtml?kzone=souye_jiankangtoutiao">能不能生，查查生育力就知道了
                </a>
              </li>
              <li>
                <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEVmUFiGAElaXAAALa9Y4Sds472.jpg">
                <a href="http://m.360kad.com/jknews/jksc/ysbj/3689006.shtml?kzone=souye_jiankangtoutiao">饭菜放凉多久才能放进冰箱，你又被骗了好多年
                </a>
              </li>
              <li>
                <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFUGAACg6AAALa9Y4Sds981.jpg">
                <a href="http://m.360kad.com/jknews/jksc/tj/3675435.shtml?kzone=souye_jiankangtoutiao">医生都常吃的铁皮石斛，吃它原来有这5种作用
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
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
/*------------导航栏----------------*/
.navlist {
    width: 100%;
    background: white url(http://image.360kad.com/group2/M00/20/07/CgAgFFolKAiAbZA1AADfHjd-t1U093.png) no-repeat;
    background-size: 100% 3.5rem;
}
.navlist ul{
    padding: .3rem .5rem;
}
.navlist ul li {
    width: 15.4%;
    float: left;
    margin-right: 12.6%;
    margin-bottom: .12rem;
    text-align: center;
    line-height: .3rem;
}
.navlist ul li a {
    font-size: .24rem;
    color: #222;
    display: block;
}
.navlist ul li p:first-child {
    margin-bottom: .08rem;
}
.navlist ul li p:nth-child(2) {
    height: .3rem;
    line-height: .3rem;
    overflow: hidden;
    color: #fff;
}
.navlist li p:first-child img {
    width: 1rem;
    height: 1rem;
    /* vertical-align: top; */
    display: block;
}
.navlist ul li:nth-child(n+5) {
    margin-bottom: 0;
}
.navlist ul li:nth-child(4n) {
    margin-right: 0;
}
/* -------------------------------seclist 主体内容-------------------------------------- */
/* 无缝滚动--健康头条 */
.health_h{
    width: 100%;
    background: #fff;
}
.health_h .health_c {
    padding: 0.31rem 0.15rem 0.31rem 0.28rem;
    background: #fff;
}
.health_logo{
    float: left;
    width: 1.28rem;
    margin-right: 0.12rem;
}
.health_logo img {
    width: 1.28rem;
}
.health_lunbo{
  float: left;
  width: 5.5rem;
  height: 0.39rem;
  position: relative;
}
.health_lunbo li{
  width: 5.5rem;
  font-size: 0.28rem;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.08rem 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.health_lunbo li img{
    float: left;
    width: 0.6rem;
    height: 0.31rem;
    margin-right: 0.08rem;
}
.health_lunbo li a{
  color: #020202;
  font-size: 0.28rem;
}


/* index页的秒杀 */

</style>
