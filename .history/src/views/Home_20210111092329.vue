<template>
  <div class="flex-d al-center">
    <div class="topBox flex-d al-center">
      <div class="topTil flex al-center ju-center">
        <div>
          <img src="../image/logo.png" class="logoImg" alt="" />
        </div>
        <div v-for="item in headline" class="itemBox" :key="item.id">
            {{ item }}
        </div>
      </div>
      <div>
        <img src="../image/toplogo.png" class="toplogoImg" alt="" />
      </div>
    </div>

    <div class="regardBox flex pos-rel">
          <div class="videoBox flex al-center ju-center">
            <videoPlayer    ref="videoPlayer" class="videoplay" :playsinline="true"  :options="playerOptions"></videoPlayer> 
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
  </div>
</template>

<script>
         import { videoPlayer } from 'vue-video-player';
        import 'video.js/dist/video-js.css';
export default {
  name: "",
  props: {},
  components: {
     videoPlayer
  },
  data() {
    return {
      headline: ["网站首页", "关于我们", "产品中心", "联系我们"],
      playerOptions:{
        sources:[{
          type:'video/mp4',
          src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        }],
        preload:'auto',
        notSupportedMessage:"此视频暂无法播放，请稍后再试",
        controlBar:{
          timeDivider:true,
          durationDisplay: true,
          remainingTimeDisplay: false,//全屏按钮
          fullscreenToggle: true
        }
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
       player(){

              return this.$refs.videoPlayer.player

            } 
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
    color: #FF6609;
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

.regardBox{
  margin-top: 90px;
  width: 1200px;
}

/deep/
.video-js{
  width: 660px;
  height: 470px;
}

.videoBox{
  display: inline-block;
  width: 660px;
  height: 470px;
  background: red;
  overflow: hidden;position: relative;
  z-index: 2;
}

.briefBox{
  margin-top: 30px;
  left: 580px;
  width: 600px;
  height: 500px;
  background: #FF6609 ;
}

.briefCon{
  margin-left: 140px;
  margin-top: 50px;
  width: 400px;
  height: 400px;
  font-size: 30px;
  color: #ffffff;
}

.briefLine{
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin: 20px 0;
}

.brContent{
  margin-top: 15px;
  width: 100%;
  font-size: 12px;
  
line-height: 22px;
}

.video-js .vjs-big-play-button{
  top: 190px;
}
</style>
