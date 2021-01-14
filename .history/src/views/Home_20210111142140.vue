<template>
  <div class="flex-d al-center">
    <div class="topBox flex-d al-center">
      <div class="topTil flex al-center ju-center">
        <div>
          <img src="../image/home/logo.png" class="logoImg" alt="" />
        </div>
        <div v-for="item in headline" class="itemBox" :key="item.id">
          {{ item.title }}
        </div>
      </div>
      <div>
        <img src="../image/home/toplogo.png" class="toplogoImg" alt="" />
      </div>
    </div>

    <div class="regardBox flex pos-rel">
      <div class="videoBox flex al-center ju-center">
        <videoPlayer
          ref="videoPlayer"
          class="videoplay"
          :playsinline="true"
          :options="playerOptions"
        ></videoPlayer>
      </div>
      <div class="briefBox pos-abs">
        <div class="briefCon flex-d al-center">
          <div class="">ABOUT US</div>
          <div class="briefLine"></div>
          <div>关于快通</div>
          <div class="brContent">
            快通APP是一款优质出行服务类软件，当下我们享受着时尚的生活和快节奏的出行方式，但是难免会感受到一些出行的不便和问题，比如单元门口忘带门禁卡迟迟回不了家、双手都拎满了东西，没有空手按电梯、电梯里人太多害怕病菌传染、去朋友家做客要填一大堆资料等等。这些问题，快通来帮你解决，当你走到小区门口门禁会自动识别，走到单元门，单元门会自动打开，走到电梯，电梯自动识别业主，电梯会自动下降到一楼等待，进入轿厢，不用按键，自动到达业主楼层。访客可在APP上向业主申请访问获得授权二维码，到达小区门口扫码进入，并在物业管理处自动生成一条来访信息。开车出行也无需等级，车牌号预选绑定。快通APP使您的生活更加便捷，节省时间精力，物业方只需将现有的硬件与快通模块相匹配结合，也可直接使用快通整套硬件设备，用户只需在手机应用商店下载“快通”APP注册登录，安全可靠，放心应用，我们积极响应国家号召，以物联网、大数据云技术、AI为基础，加速建设智慧城市家园。
          </div>
        </div>
      </div>
    </div>

    <div class="aboutMe">
      <div class="aboutWho flex">
        <div class="aText">WHO WE ARE</div>
        <div>/我们是谁</div>
      </div>
      <div class="aboutRY">关于锐远科技</div>
      <div class="introduceRY">
        成都锐远电子科技有限公司是一家集研发、生产、销售、安装、售后为一体的高新技术企业，公司秉承服务至上的经营理念，为此，我司不断升级老产品，发展新业务，且可为有特殊需求的客户进行定制化设计，力求达到所有客户最高的满意度。主营产品包括智慧社区管理系统、物联网通行系统、及各类硬件设备，如人脸识别机器（活体检测、口罩识别、二维码识别、IC卡、红外测温、手腕测温等）；通道闸机（翼闸、三辊闸、摆闸、平移闸、全高通闸等）。
      </div>
      <div class="flex-d al-center m-t5 aServe">
        <div>一切为您的需求服务！</div>
        <div class="m-t2">Customer First！</div>
      </div>
    </div>

    <div class="machineBox flex-d al-center">
      <img src="../image/home/gateMachineba.png" class="gateMachine" alt="" />
      <div class="lists flex pos-rel">
        <div v-for="item in gateLists" class="Item" :key="item.id">
          <img :src="item.image" class="itemImg" alt="" />
          <div class="maskLayer"></div>
        </div>
      </div>
    </div>

    <div class="honor flex-d al-center">
      <div class="hTil">公司荣誉</div>
      <div class="certificate flex ju-between al-center">
        <img src="../image/home/certificate/cer1.png" class="cer1Img" alt="" />
        <img src="../image/home/certificate/cer2.png" class="cer2Img" alt="" />
      </div>

      <div class="case hTil">安装案例</div>
      <div class="flex ju-between work">
        <img src="../image/home/works1.png" class="works1Img" alt="" />
        <img src="../image/home/works2.png" class="works2Img" alt="" />
      </div>

      <div>
        <img src="../image/home/teamwork.png" class="teamworkImg" alt="">
      </div>
    </div>

    <div class="endMark flex ju-center">
        <div class="endCentent flex">
          <!-- 快速导航 -->
          <div> 
            <div class="endTil">快速导航</div>
            <div v-for=" item in headline" class=" m-b3" :key="item.id">
              {{item.title}}
            </div>
          </div>
          <!-- 产品中心 -->
          <div class=" pos-rel m-left"> 
            <div class="endTil">产品中心</div>
            <div v-for=" item in product" class=" m-b3" :key="item.id">
              {{item.title}}
            </div>
          </div>
          <!-- 联系我们 -->
          <div class=" pos-rel contactUs">
             <div class="endTil">联系我们</div>
             <div>
               电话：028-63828442
             </div>
              <div>
               手机：13060035586
             </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  name: "",
  props: {},
  components: {
    videoPlayer,
  },
  data() {
    return {
      headline: [{title:'网站首页'},{title:'关于我们'},{title:'产品中心'},{title:'联系我们'}],
      product:[{title:'人脸识别机'},{title:'翼闸'},{title:'摆闸'},{title:'三辊闸'},{title:'平移闸'},{title:'全高通闸'},{title:'立柱'}],
      playerOptions: {
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
          },
        ],
        preload: "auto",
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false, //全屏按钮
          fullscreenToggle: true,
        },
      },
      gateLists: [
        { image: require("@/image/home/gatelog1.png") },
        { image: require("@/image/home/gatelog2.png") },
        { image: require("@/image/home/gatelog3.png") },
        { image: require("@/image/home/gatelog4.png") },
        { image: require("@/image/home/gatelog5.png") },
        { image: require("@/image/home/gatelog6.png") },
      ],
     
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
};
</script>

<style scoped lang='scss'>
.toplogoImg {
  width: 100%;
  height: 820px;
}
.logoImg {
  width: 180px;
  height: 60px;
}

.itemBox {
  margin-left: 160px;
  cursor: pointer;
  &:hover {
    color: #ff6609;
  }
}

.topTil {
  top: 60px;
  width: 1200px;
  height: 60px;
  position: absolute;
  z-index: 9;
  color: #ffffff;
  font-size: 18px;
}

.regardBox {
  margin-top: 90px;
  width: 1200px;
}

/deep/ .video-js {
  width: 660px;
  height: 470px;
}

.videoBox {
  display: inline-block;
  width: 660px;
  height: 470px;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

/deep/ .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}

.briefBox {
  margin-top: 30px;
  left: 580px;
  width: 600px;
  height: 500px;
  background: #ff6609;
}

.briefCon {
  margin-left: 140px;
  margin-top: 50px;
  width: 400px;
  height: 400px;
  font-size: 30px;
  color: #ffffff;
}

.briefLine {
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin: 20px 0;
}

.brContent {
  margin-top: 15px;
  width: 100%;
  font-size: 12px;

  line-height: 22px;
}

.aboutMe {
  margin-top: 120px;
  width: 1200px;
  font-size: 12px;
}

.aboutWho {
  align-items: baseline;
}

.aText {
  font-size: 30px;
}

.aboutRY {
  margin-top: 25px;
  color: #ff6609;
  font-size: 24px;
}

.introduceRY {
  margin-top: 50px;
  width: 1110px;
}

.aServe {
  font-size: 20px;
}

.machineBox {
  margin-top: 130px;
}

.gateMachine {
  width: 100%;
  height: 650px;
}

.lists {
  margin-top: -50px;
  width: 1200px;
}

.maskLayer {
  top: 0;
  width: 200px;
  height: 130px;
  margin-left: -2px;
  position: absolute;
  background: rgba(47, 155, 255, 0.2);
  z-index: 9;
  display: none;
}
.Item:hover {
  .maskLayer {
    display: block !important;
  }
}
.itemImg {
  margin-left: -2px;
  width: 200px;
  height: 130px;
}

.honor {
  margin-top: 90px;
  width: 1200px;
}

.hTil {
  font-size: 30px;
}

.certificate {
  margin-top: 100px;
  width: 680px;
  height: 210px;
}

.cer1Img {
  width: 150px;
  height: 200px;
}

.cer2Img {
  width: 230px;
  height: 180px;
}

.case {
  margin-top: 120px;
}

.work {
  margin-top: 70px;
  width: 1200px;
}

.works1Img {
  width: 580px;
  height: 770px;
}

.works2Img {
  width: 600px;
  height: 770px;
}

.teamworkImg{
  margin-top: 110px;
  width: 550px;
  height: 330px;
}

.endMark{
  width: 100%;
  height: 500px;
  background:#333333;
}

.endCentent{
  margin-top: 70px;
  width: 1200px;
  height: 400px;
  background: olive;
  color: #ffffff;
  font-size: 16px;
}

.endTil{
font-size: 24px;
margin-bottom: 40px;
}

.m-left{
  left: 330px;
}

.contactUs{
  left: 560px;

}
</style>
