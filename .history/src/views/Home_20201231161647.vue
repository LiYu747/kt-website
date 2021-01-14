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
          <div class="videoBox">

          </div>
          <div class="briefBox pos-abs">
              <div class="briefCon">
                 <div class="">ABOUT US</div>
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
    return {
      headline: ["网站首页", "关于我们", "产品中心", "联系我们"],
    };
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

.videoBox{
  width: 660px;
  height: 470px;
  background: red;
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
  background: wheat;
  font-size: 30px;
}
</style>
