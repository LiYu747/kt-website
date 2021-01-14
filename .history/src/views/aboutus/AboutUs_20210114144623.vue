<template>
  <div class="flex-d al-center">
    <div class="toplogoImg pos-rel flex-d al-center">
      <img src="../../image/aboutUs/toplogo.png" class="toplogoImg" alt="" />
      <div>
        <img
          src="../../image/aboutUs/logo2.png"
          class="logo2Img pos-abs"
          alt=""
        />
      </div>
    </div>
    <div class="ontentBox flex">
      <div class="aboutMe">
        <div class="aboutWho flex">
          <div class="aText">WHO WE ARE</div>
          <div>/我们是谁</div>
        </div>
        <div class="line"></div>
        <div class="abry">关于快通</div>
        <div class="introduceRY">
         快通APP是一款优质出行服务类软件，当下我们享受着时尚的生活和快节奏的出行方式，但是难免会感受到一些出行的不便和问题，比如单元门口忘带门禁卡迟迟回不了家、双手都拎满了东西，没有空手按电梯、电梯里人太多害怕病菌传染、去朋友家做客要填一大堆资料等等。这些问题，快通来帮你解决，当你走到小区门口门禁会自动识别，走到单元门，单元门会自动打开，走到电梯，电梯自动识别业主，电梯会自动下降到一楼等待，进入轿厢，不用按键，自动到达业主楼层。访客可在APP上向业主申请访问获得授权二维码，到达小区门口扫码进入，并在物业管理处自动生成一条来访信息。开车出行也无需等级，车牌号预选绑定。
         快通APP使您的生活更加便捷，节省时间精力，物业方只需将现有的硬件与快通模块相匹配结合，也可直接使用快通整套硬件设备，用户只需在手机应用商店下载“快通”APP注册登录，安全可靠，放心应用，我们积极响应国家号召，以物联网、大数据云技术、AI为基础，加速建设智慧城市家园。
        </div>
        <div class="aboutRY">关于锐远科技</div>
        <div class="introduceRY">
          成都锐远电子科技有限公司是一家集研发、生产、销售、安装、售后为一体的高新技术企业，公司秉承服务至上的经营理念，为此，我司不断升级老产品，发展新业务，且可为有特殊需求的客户进行定制化设计，力求达到所有客户最高的满意度。主营产品包括智慧社区管理系统、物联网通行系统、及各类硬件设备，如人脸识别机器（活体检测、口罩识别、二维码识别、IC卡、红外测温、手腕测温等）；通道闸机（翼闸、三辊闸、摆闸、平移闸、全高通闸等）。
        </div>
        <!-- <div class="flex-d al-center m-t5 aServe">
          <div>一切为您的需求服务！</div>
          <div class="m-t2">Customer First！</div>
        </div> -->
      </div>

      <div>
          <img src="../../image//aboutUs/logo1.png" class=" pos-abs move" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.toplogoImg {
  width: 100%;
  height: 100%;
}
.logo2Img {
  width: 80px;
  height: 80px;
  bottom: 170px;
  margin-left: -40px;
}

.ontentBox {
  margin-top: 120px;
  width: 1200px;
  position: relative;
}

.aboutMe {
  width: 300px;
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
}

.aServe {
  font-size: 20px;
}

.line{
    width: 70px;
    height: 2px;
    background: #666666;
    margin-top: 30px;
    margin-bottom: 40px;
}

.abry{
    font-size: 30px;
    color: #4D4D4D;
}

.move{
    right: 0;
}
</style>