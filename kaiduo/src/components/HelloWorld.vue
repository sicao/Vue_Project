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
      <!-- 健康头条 -->
      <section class="health_h">
        <div class="health_c clearfix">
          <div class="health_logo">
            <img src="http://res1.360kad.com/theme/default/img/promotions/lifeng/20170726/m/health.jpg" alt="">
          </div>
          <div class="health_lunbo clearfix">
            <swiper :options="swiperOption_v">
              <swiper-slide class="lunbo">
                <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFcGAfFZDAAALa9Y4Sds309.jpg">
                <a href="http://m.360kad.com/jknews/jksc/fejk/3689005.shtml?kzone=souye_jiankangtoutiao">能不能生，查查生育力就知道了
                </a>
              </swiper-slide>
              <swiper-slide class="lunbo">
                <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEVmUFiGAElaXAAALa9Y4Sds472.jpg">
                <a href="http://m.360kad.com/jknews/jksc/ysbj/3689006.shtml?kzone=souye_jiankangtoutiao">饭菜放凉多久才能放进冰箱，你又被骗了好多年
                </a>
              </swiper-slide>
              <swiper-slide class="lunbo">
                 <img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFUGAACg6AAALa9Y4Sds981.jpg">
                <a href="http://m.360kad.com/jknews/jksc/tj/3675435.shtml?kzone=souye_jiankangtoutiao">医生都常吃的铁皮石斛，吃它原来有这5种作用
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
      <!-- 秒杀(1元秒健康) -->
      <div class="skill mt30" id="skill_sec">
        <div class="skill-top clearfix">
          <div class="skillt-l fl">
            <img src="http://res.360kad.com/theme/mobile/img/m_index/skill-logo1.png" alt="">
          </div>
          <div class="skillt-m fl" id="skill_timeout">
          9点场<span>06</span>:<span>07</span>:<span>15</span>
          </div>
          <a href="#" class="skillt-r fr">1元秒健康</a>
        </div>
        <div class="skill-list" id="skill_list">
           <swiper :options="swiperOption_GetSecKillList">
              <swiper-slide v-for="seckill in GetSecKillList" :key="seckill.id" class="skillList">
                <a href="#">
                <span class="skill-promotion">{{((seckill.Price-seckill.PrmPrice)/seckill.Price).toFixed(1)}}折</span>  
                <p class="skill-img"><img :src="seckill.wareInfo.Pic"></p>        
                <p class="skill-vipprice">￥<span>{{seckill.PrmPrice}}</span></p>     
                <p class="skill-marprice">￥{{seckill.Price}}</p>
                </a>
              </swiper-slide>
            </swiper>
        </div>
      </div>
      <!-- some-room(imgList) -->
      <div class="some-room mt30 clearfix">
        <a href="#">
          <img src="http://image.360kad.com/group2/M00/13/29/CgAgFVn34PaAVBLPAADN9TulWdg980.jpg">
        </a>
        <a href="#">
          <img src="http://image.360kad.com/group2/M00/14/5A/CgAgFFn8GB-AM3kqAABweiiy_Oo506.jpg">
        </a>
        <a href="#">
          <img src="http://image.360kad.com/group1/M00/BC/A6/CgAgEFmaukOAYoXpAAB--pMKjqo400.jpg">
        </a>
        <a href="#">
          <img src="http://image.360kad.com/group1/M00/7E/97/CgAgEVhssa6AVKKeAAB8bZXNouc315.png">
        </a>
        <a href="#">
          <img src="http://image.360kad.com/group1/M00/7E/97/CgAgEFhssaCAEH4VAABscXeimWc878.png">
        </a>
      </div>
      <!-- 小康推荐 GOOD -->
      <div class="xklj-list mt30">
        <div class="floor-title">小康推荐 <span>GOOD</span></div>
        <swiper :options="swiperOption_floor">
          <swiper-slide class="floor-content">
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/13/23/CgAgFFn31tKAcl4XAAB72Yy19Go754.jpg">
              </a>
          </swiper-slide>
          <swiper-slide class="floor-content">
              <a href="#">
                <img src="http://image.360kad.com/group2/M00/13/23/CgAgFFn31ueACJzqAACZq1DGv8A322.jpg">
              </a>
          </swiper-slide>
          <swiper-slide class="floor-content">
              <a href="#">
                <img src="http://image.360kad.com/group2/M00/13/23/CgAgFVn31wCAQcv8AACcKCxZZIw517.png">
              </a>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 图片轮播 -->
      <div class="banner2">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/20/27/CgAgFVol7-6AeR6CAAFd8xkN6N8955.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/21/02/CgAgFVoou92AczwOAAEQCVExFR0875.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/20/F8/CgAgFFoopqKADJH2AACwIumbe0Y863.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/1F/D2/CgAgFFokr_mAR60aAAGFRXNwUIQ235.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/1E/D7/CgAgFFogvV-ATU9qAAFG_PQ4J0s580.jpg">
              </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 病科类 -->
      <div id="cateBox">
        <section class="category mt30" v-for="item in diseaseCategory" :key="item.id">
          <div class="category-head">
            <img :src="item.FloorImg">
          </div>
          <swiper :options="swiperOption_GetSecKillList">
            <swiper-slide v-for="item in item.LunBoList" :key="item.id">
              <a href="#">
                <img :src="item.Pic">
              </a>
            </swiper-slide>
          </swiper>
          <div class="category-videos clearfix">
            <a href="#" v-for="item in item.VideoList" :key="item.id">
              <img :src="item.Pic">
            </a>
          </div>
          <div class="category-txt clearfix">
            <ul>
              <li v-for="item in item.TextList" :key="item.id">
                <i>
                  <img :src="item.Logo">
                </i>
                <a href="#">{{item.Title}}</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <!-- 图片轮播banner3 -->
      <div class="guid mt30">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/20/27/CgAgFVol7-6AeR6CAAFd8xkN6N8955.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/21/02/CgAgFVoou92AczwOAAEQCVExFR0875.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/20/F8/CgAgFFoopqKADJH2AACwIumbe0Y863.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/1F/D2/CgAgFFokr_mAR60aAAGFRXNwUIQ235.jpg">
              </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
                <img src="http://image.360kad.com/group2/M00/1E/D7/CgAgFFogvV-ATU9qAAFG_PQ4J0s580.jpg">
              </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 猜你喜欢 -->
      <div class="user-like">
        <div class="like-top">
          <p class="liketop-name">猜你喜欢</p>
          <p class="liketop-line"></p>
        </div>
        <div class="like-list" id="like-list">
          <ul class="clearfix">
              <li v-for="item in youLike" :key="item.id">
                <a href="#">
                  <p class="likepro-img">
                    <img :src="item.Pic180">
                  </p>
                  <p class="likepro-name plr26 text-elli">{{item.WareName}}</p>
                  <p class="likepro-price clearfix plr26">
                    <span class="fl">￥<span>{{item.SalePrice}}</span></span>
                    <span class="fr">￥{{item.MarketPrice}}</span>
                  </p>
                </a>
              </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 底部 -->
    <footer class="index-footer-wrap">
      <div class="footer-size1 clearfix">
        <a href="#" class="pifa_shop">批发商洽<span></span></a>
        <a href="#">用药问答</a>
        <a href="#">药品库</a>
        <a href="#">健康咨讯</a>
      </div>
      <div id="IsLogin" class="footer-size1 clearfix">
            <a href="#">登录</a>
            <a href="#">注册</a>
            <a href="#">点赞吐槽</a>
            <a href="#">关于康爱多</a>
      </div>
      <div class="footer-size2">
        <span>正品保证</span>
        <span>隐私配送</span>
        <span>专业药师</span>
        <span>货到付款</span>
      </div>
      <div class="footer-size3">copyright&nbsp;&nbsp;©2010-2016 康爱多网上药店 版权所有</div>
    </footer>
    <!-- 咨询 -->
    <section>
      <div class="kf-bg"></div>
      <div class="index-kf-wrap">
        <div id="moreW" class="kf-cont">咨询</div>
        <div class="more-wrap">
          <i class="bt-bg"></i>
          <ul class="nav-ul2">
            <li><a href="#">电话咨询</a></li>
            <li class="zx2"><a href="javascript:void(0)">在线咨询</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 回到顶部 -->
    <section>
      <div class="top-bg" style="display: none;"></div>
      <div class="index-top-wrap" style="display: block;">
          <div class="top-cont">顶部</div>
      </div>
    </section>
    <!-- 下载注册 -->
    <section>
      <div class="index-footer-nav" id="lonw_warp">
        <img src="http://image.360kad.com/group2/M00/11/1A/CgAgFFnv-s6AH96mAACDvcHvU5g049.jpg">
      </div>
    </section>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
            stopOnLastSlide: false, 
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        loop : true
      },
      swiperOption_v:{
        direction: 'vertical',
        autoplay: {
            stopOnLastSlide: false, 
            disableOnInteraction: false
        },
        loop : true
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
      ],
      // index秒杀
      swiperOption_GetSecKillList:{
         slidesPerView: 3.5
      },
      GetSecKillList: {},
      swiperOption_floor:{
        slidesPerView: 1.74
      },
      diseaseCategory: {},
      youLike: {}
    }
  },
  mounted() {
    // index秒杀
    this.$http.get('/api/SecKill/GetSecKillList',{
        params:{
          page:1,
          pageSize:10,
          type:1,
          channelCode:100021,
          sort:4
        }
      }).then((res) => {
        this.GetSecKillList = res.data.Data;
      });
      //病科类型
      this.$http.get('/api/home/GetHomeFloorAdView').then((res) => {
        this.diseaseCategory = res.data;
      });
      //猜你喜欢
      this.$http.get('/api/DataPlatform/GetIndexGuessLikeProducts',{
        params: {
          pagesize:8,
		   		pageindex:1
        }
      }).then((res) => {
        console.log(res.data.Data);
        this.youLike = res.data.Data;
      })
  }
}
</script>


<style scoped>
/*-----------------------首页-----------------------*/
img {
    width: 100%;
    margin: 0;
    padding: 0;
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
}
.health_lunbo .lunbo{
  width: 5.5rem;
  font-size: 0.28rem;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.08rem 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.health_lunbo .lunbo img{
    float: left;
    width: 0.6rem;
    height: 0.31rem;
    margin-right: 0.08rem;
}
.health_lunbo .lunbo a{
  color: #020202;
  font-size: 0.28rem;
}
.health_lunbo .swiper-container{
  height: 100%;
}
/* index页的秒杀 */
.mt30 {
    margin-top: .3rem;
}
.skill {
    background: white;
}
.skill-top {
    padding: .28rem;
    border-bottom: 1px solid #f7f7f7;
    font-size: .28rem;
}
.skillt-l, .skillt-l img {
    width: 1.26rem;
    height: .4rem;
}
.skillt-m {
    font-size: .28rem;
    margin-left: .24rem;
    color: #222;
}
.skillt-m span{
    font-size: .24rem;
    border:1px solid #dfdfdf;
    border-radius: .05rem;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
    padding-left: .06rem;
    padding-right: .06rem;
    margin-left: .1rem;
    margin-right: .1rem;
}
.skillt-r {
   display: block;
    padding: 0;
    margin: 0;
    width: 1.5rem;
    background: url("http://res1.360kad.com/theme/mobile/img/m_index/go1.jpg") right center no-repeat;
    background-size: 0.14rem 0.23rem;
    color: #ff3b59;
    font-size: .28rem;
    position: relative;
}
/* 秒杀商品list */
.skill-list {
    padding: 0.35rem 0 0.25rem 0;
}
.skill-list .skillList {
    float: left;
    width: 25%;
    position: relative;
    text-align: center;
}
.skill-img img {
    height: 1.8rem;
    text-align: center;
    vertical-align: top;
}
.skill-vipprice {
    color: #ff4e49;
    font-size: .22rem;
    line-height: .32rem;
    margin-top: .16rem;
}
.skill-vipprice span {
    font-size: .28rem;
    font-weight: bold;
}
.skill-marprice {
    font-size: .22rem;
    line-height: .3rem;
    color: #b5b5b5;
    text-decoration: line-through;
    margin-top: .04rem;
}
.skill-promotion{
    background: -webkit-linear-gradient(left, #fe5d3a 0%,#ff2b67 100%);
}
.skill-promotion {
    background-color: #ff970f;
    color: white;
    font-size: .24rem;
    width: 1rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    top: 1.35rem;
    right: 0.2rem;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
}
/*------------some-room(imgList)----------------*/
.some-room {
    height: 5.32rem;
    background-color: white;
}
.some-room a {
    display: block;
    float: left;
    width: 50%;
}
.some-room a:first-child {
    height: 3.6rem;
    border-right: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
}
.some-room a:first-child img {
    height: 3.59rem;
}
.some-room a:nth-child(2), .some-room a:nth-child(3) {
    height: 1.8rem;
    border-bottom: 1px solid #f9f9f9;
}
.some-room a:nth-child(2) img, .some-room a:nth-child(3) img {
    height: 1.79rem;
}
.some-room a:nth-child(4), .some-room a:nth-child(5) {
    height: 1.7rem;
    float: right;
}
.some-room a:nth-child(5) {
    border-right: 1px solid #f9f9f9;
}
.some-room a:nth-child(4) img, .some-room a:nth-child(5) img {
    height: 1.7rem;
}
/* 小康推荐 */
/*------------小康推荐--------------*/
.xklj-list {
    background-color: white;
    overflow-x: hidden;
}
.floor-title {
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    color: #222;
    font-size: .34rem;
    font-weight: bold;
    position: relative;
    background-color: white;
    border-bottom: 1px solid #f7f7f7;
}
.floor-title span {
    color: #b9e1f0;
    font-size: .3rem;
    padding-right: .14rem;
}
.floor-content {
    height: 3rem;
    padding-top: .3rem;
    padding-bottom: .3rem;
}
.floor-content:first-of-type{
  padding-left: .3rem;
}
.floor-content:nth-child(2){
  margin-left: .3rem;
}
.floor-content:last-of-type{
  padding-right: .3rem;
}
.floor-content a{
  display: inline-block;
  width: 4rem;
}
.floor-content img{
    width: 100%;
    height: 100%;
}
/*-------------图片轮播---------------*/
.banner2{
    width: 100%;
    height: 2rem;
}
.banner2 img{
    height: 100%;
    overflow: hidden;
}
/*----------病科种类------------*/
#cateBox .category {
    width: 100%;
    background: #fff;
    overflow-x: hidden;
}
#cateBox .category-head {
    width: 100%;
    height: 0.8rem;
}
#cateBox .category-head img{
    width: 100%;
    height: 0.8rem;
}
#cateBox .category-navss {
    top: 0.01rem;
    border-bottom: 1px solid #F0F0F0;
}
#cateBox .category-videos img {
    width: 3.74rem;
    float: left;
    border-bottom: 1px solid #F0F0F0;
}
#cateBox .category-videos img:first-of-type {
    border-right: 1px solid #F0F0F0;
}
#cateBox .category-txt {
    width: 100%;
    background: #fff;
}
#cateBox .category-txt li {
    display: flex;
    align-items: center;
    clear: both;
    padding: 0 0.16rem 0.05rem;
}
#cateBox .category-txt li:first-of-type {
    padding-top: 0.2rem;
}
#cateBox .category-txt li:last-of-type {
    padding-bottom: 0.2rem !important;
}
#cateBox .category-txt i {
    float: left;
    width: 0.59rem;
    margin-right: 0.15rem;
}
#cateBox .category-txt i img{
    vertical-align: middle;
}
#cateBox .category-txt a {
    font-size: 0.3rem;
    display: block;
    color: #020202;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/*------------- 图片轮播banner3------------*/
.guid {
    width: 100%;
    height: 2rem;
}
.guid img{
    width: 100%;
    height: 2rem;
    vertical-align: bottom;
}
/*-------------猜你喜欢-----------------*/
.like-top {
    position: relative;
    width: 5.2rem;
    height: .3rem;
    line-height: .3rem;
    color: #888888;
    font-size: .3rem;
    margin:  .47rem auto .27rem auto;
    text-align: center;
}
.liketop-name {
    position: absolute;
    width: 1.94rem;
    height: .3rem;
    left: 1.63rem;
    top: 0;
    background: #eeeeee url(../assets/img/likestar.png) no-repeat .18rem .04rem;
    background-size: .26rem .22rem;
    z-index: 2;
    text-align: center;
    text-indent: .52rem;
}
.liketop-line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    top: .145rem;
    left: 0;
    z-index: 1;
}
.like-list ul li {
    width: 49.5%;
    float: left;
    vertical-align: top;
    border: 1px solid #f2f2f2;
    background-color: white;
    margin-bottom: .08rem;
}
.like-list ul li:nth-child(2n-1) {
    margin-right: 1%;
}
.likepro-img, .likepro-img img {
    width: 2.5rem;
    height: 2.5rem;
}
.likepro-img {
    margin: .5rem auto;
}
.likepro-name {
    color: #222;
    font-size: .28rem;
    line-height: .4rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
.plr26 {
    padding-left: .26rem;
    padding-right: .26rem;
}
.text-elli {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.likepro-price {
    line-height: .4rem;
    margin-bottom: .3rem;
}
.likepro-price .fl {
    color: #fd3f3f;
    font-size: .22rem;
}
.likepro-price .fl span {
    font-size: .3rem;
    font-weight: bold;
}
.likepro-price .fr {
    font-size: .24rem;
    color: #b5b5b5;
    text-decoration: line-through;
}
/*----------底部------------*/
.index-footer-wrap {
    width: 100%;
    padding: .5rem .2rem .3rem;
    background-color: #fff;
}
.footer-size1, .footer-size2 {
    height: .4rem;
    line-height: .4rem;
    margin-bottom: .3rem;
    text-align: center;
}
/* .footer-size1:nth-child(1) {
    margin-left: 0.3rem;
}
.footer-size1:nth-child(2) {
    margin-left: 0.9rem;
} */
.footer-size1 a {
    height: .3rem;
    display: inline-block;
    line-height: .3rem;
    font-size: .28rem;
    color: #898989;
    padding: 0 .3rem;
    border-left: solid 1px #dadada;
}
.footer-size1 a:first-child {
    border-left: none;
    padding-left: .2rem;
}
.pifa_shop {
    position: relative;
}
.pifa_shop span {
    background: url(http://res.360kad.com/theme/default/img/product/2014new/pifa_new.png);
    width: 23px;
    height: 10px;
    display: inline-block;
    position: absolute;
    top: -0.22rem;
    right: 0.2rem;
}
.footer-size3 {
    font-size: .24rem;
    color: #898989;
    line-height: .4rem;
    text-align: center;
}
.footer-size2 {
    margin-bottom: 0;
}
.footer-size2 span {
    display: inline-block;
    line-height: .4rem;
    font-size: .24rem;
    color: #252525;
    padding: 0 .3rem 0 .35rem;
    background: url(../assets/img/sevice_icon.png) no-repeat left center;
    background-size: .26rem;
}
/*--------------在线咨询  回到顶部  注册关注-------------*/
.index-kf-wrap, .kf-bg, .index-top-wrap, .top-bg {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    position: fixed;
    bottom: 2rem;
    z-index: 3;
}
.index-kf-wrap, .kf-bg {
    left: .3rem;
}
.kf-bg {
    background-color: #3894f4;
    opacity: .9;
}
.kf-cont, .top-cont {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
}
.kf-cont, .top-cont {
    padding-top: .6rem;
    box-sizing: border-box;
    background: url(../assets/img/kfIcon.png) no-repeat center .12rem;
    background-size: .55rem .46rem;
    font-size: .22rem;
    color: #fff;
    text-align: center;
    line-height: .3rem;
}
.top-bg {
    background-color: #000;
    opacity: .5;
}
.index-top-wrap, .top-bg {
    right: .3rem;
}
.top-cont {
    background: url(../assets/img/topIcon.png) no-repeat center .12rem;
    background-size: .55rem .46rem;
}
.index-footer-nav {
    width: 100%;
    height: 1.07rem;
    overflow: hidden;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 3;
    transition: bottom 300ms ease-out;
    display: block;
}
.index-footer-nav img {
    width: 100%;
}
/*----------咨询Item--------*/
.more-wrap {
    width: 3rem;
    height: 1.8rem;
    position: absolute;
    top: -2rem;
    left: -.3rem;
    background: #fff;
    border: solid 1px #dadada;
    padding: 0 .2rem;
    transition: all 0.3s;
    transform: translate(-.7rem,1.2rem) scale(0,0) rotate(0);
    visibility: hidden;
}
.index-kf-wrap .curindex {
    visibility: visible;
    background: #fff;
    transform: translate(0,0) scale(1,1) rotate(0);
}
.more-wrap .bt-bg {
    width: .34rem;
    height: .21rem;
    background: url(../assets/img/right_sel.png) no-repeat center;
    background-size: 100%;
    display: inline-block;
    position: absolute;
    bottom: -.18rem;
    left: .58rem;
}
.nav-ul2 li {
    height: .9rem;
    line-height: .9rem;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: .82rem;
    padding-right: .15rem;
    font-size: .3rem;
    color: #555555;
}
.nav-ul2 li:nth-child(1) {
    background: url(../assets/img/phone_icon.png) no-repeat .15rem center;
    background-size: .5rem .5rem;
}
.nav-ul2 li.zx2 {
    border-top: solid 1px #f1f1f1;
    background: url(../assets/img/zxIcon.png) no-repeat .15rem center;
    background-size: .5rem .5rem;
}
</style>
