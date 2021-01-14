<template>
  <div>
    <div class="topBox flex-d al-center">
      <div class="topTil flex al-center ju-center">
        <div>
          <img src="../../image/home/logo.png" class="logoImg" alt="" />
        </div>
        <div
          v-for="item in headline"
          @click="addTil(item)"
          class="itemBox"
          :key="item.id"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <router-view />
    <div class="endMark flex ju-center">
      <div class="endCentent flex">
        <!-- 快速导航 -->
        <div>
          <div class="endTil">快速导航</div>
          <div v-for="item in headline" class="m-b3" :key="item.id">
            {{ item.title }}
          </div>
        </div>
        <!-- 产品中心 -->
        <div class="pos-rel m-left">
          <div class="endTil">产品中心</div>
          <div v-for="item in product" class="m-b3" :key="item.id">
            {{ item.title }}
          </div>
        </div>
        <!-- 联系我们 -->
        <div class="pos-rel contactUs">
          <div class="endTil">联系我们</div>
          <div class="flex al-center pos-rel">
            <img
              src="../../image/about/tel.png"
              class="pos-abs locpos"
              alt=""
            />
            <div class="m-b3">电话：028-63828442</div>
          </div>
          <div class="flex al-center pos-rel">
            <img
              src="../../image/about/phone.png"
              class="pos-abs locpos"
              alt=""
            />
            <div class="m-b3">手机：13060035586</div>
          </div>
          <div class="flex al-center pos-rel">
            <img
              src="../../image/about/email.png"
              class="pos-abs locpos"
              alt=""
            />
            <div class="m-b3">邮箱：3107874946@qq.com</div>
          </div>
            <div class="flex al-center pos-rel">
            <img
              src="../../image/about/email.png"
              class="pos-abs locpos"
              alt=""
            />
             <div class="m-b3">
            地址：成都市天府新区复地·御香山3悦写字楼67栋二单元5楼503室
          </div>
          </div>
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
      headline: [
        { title: "网站首页", path: "/" },
        { title: "关于我们", path: "/", heigth: "900" },
        { title: "产品中心", path: "/about/faceRecognition" },
        { title: "联系我们", heigth: "99900" },
      ],
      product: [
        { title: "人脸识别机", path: "/about/faceRecognition" },
        { title: "翼闸", path: "/about/wingBrake" },
        { title: "摆闸", path: "/about/pendulumBrake" },
        { title: "三辊闸", path: "/about/threeGates" },
        { title: "平移闸", path: "/about/panBrake" },
        { title: "全高通闸", path: "/about/qualcommBrake" },
        { title: "立柱", path: "/about/standColumn" },
      ],
    };
  },
  methods: {
    addTil(item) {
      if (item.heigth) {
        window.scrollTo(0, item.heigth);
      }
      if (item.path == this.$route.path || !item.path) return;
      this.$router.push({ path: item.path });
    },
  },
  mounted() {},

  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
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
.endMark {
  width: 100%;
  height: 500px;
  background: #333333;
}

.endCentent {
  margin-top: 70px;
  width: 1200px;
  height: 400px;
  color: #ffffff;
  font-size: 16px;
}

.endTil {
  font-size: 24px;
  margin-bottom: 40px;
}

.m-left {
  left: 330px;
}

.contactUs {
  width: 360px;
  left: 630px;
}

.locpos {
  left: -18px;
  top: 3px;
}
</style>