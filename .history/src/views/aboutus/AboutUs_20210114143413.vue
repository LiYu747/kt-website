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
    <div class="ontentBox">
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
  height: 600px;
  background: red;
}
</style>