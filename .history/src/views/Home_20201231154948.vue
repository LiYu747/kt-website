<template>
  <div class="flex-d al-center">
    <div class="topBox">
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

.itemBox{
  margin-left: 160px;
}

.topTil {
  top: 60px;
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 9;
  color: #ffffff;
  font-size: 18px;
}
</style>
