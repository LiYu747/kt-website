<template>
  <div>
    <div
      id="searchBar"
      :style="{ background: color, position: fixed, boxShadow: shad }"
      class="topBox flex-d al-center pos-abs"
    >
      <div class="topTil flex al-center ju-center">
        <div>
          <img src="../../image/home/logo.png" class="logoImg" alt="" />
        </div>
        <div
          v-for="(item, index) in headline"
          class="itemBox pos-rel"
          :key="item.id"
          @mouseleave="mousle"
          :style="{ color: col }"
        >
          <div
            class="hov"
            @click="addTil(item)"
            :class="$route.path == item.path ? 'dv' : ''"
            @mouseenter="mousin(index)"
          >
            {{ item.title }}
          </div>
          <div v-if="index == 2 && flag == true" class="showlod flex-d">
            <div class="bosshow">
              <div
                v-for="items in product"
                @click="productCenter(items)"
                class="itemsshow fz-14"
                :key="items.id"
              >
                <div class="Til">
                  {{ items.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="topLine"></div>

    <div class="flex-d al-center">
      <div class="contentBox flex">
        <div class="connectUs">
          <div class="conTil">欢 迎 联 系 我 们</div>
          <!-- 联系我们 -->
          <div class="m-t3 m-l2 fz-16">
            <div class="flex al-center pos-rel">
              <img
                src="../../image/aboutUs/tel.png"
                class="pos-abs locpos"
                alt=""
              />
              <div class="m-b1 m-l1">电话：028-63828442</div>
            </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../image/aboutUs/phone.png"
                class="pos-abs locpos"
                alt=""
              />
              <div class="m-b1 m-l1">手机：13060035586</div>
            </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../image/aboutUs/email.png"
                class="pos-abs locpos"
                alt=""
              />
              <div class="m-b1 m-l1">邮箱：3107874946@qq.com</div>
            </div>
            <div class="flex al-center pos-rel">
              <img
                src="../../image/aboutUs/address.png"
                class="pos-abs locpos"
                alt=""
              />
              <div class="m-b3 m-l1">
                地址：成都市天府新区复地·御香山3悦写字楼67栋二单元5楼503室
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src="../../image/aboutUs/map.png" class="m-l5" alt="" />
        </div>
      </div>
      <div>
        <img src="../../image/home/teamwork.png" class="teamworkImg" alt="" />
      </div>
      <div class="mapBox">
        <!-- <div class="info">
          最新版GL地图命名空间为BMapGL,
          可按住鼠标右键控制地图旋转、修改倾斜角度。
        </div> -->
        <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:500px" :scroll-wheel-zoom='true'>
    </baidu-map>
      </div>
    </div>

    <div class="endMark flex ju-center">
      <div class="endCentent flex">
        <!-- 快速导航 -->
        <div>
          <div class="endTil">快速导航</div>
          <div
            v-for="item in headline"
            @click="addTil(item)"
            class="m-b3 cur"
            :key="item.id"
          >
            {{ item.title }}
          </div>
        </div>
        <!-- 产品中心 -->
        <div class="pos-rel m-left">
          <div class="endTil">产品中心</div>
          <div
            v-for="item in product"
            class="m-b3 cur"
            @click="productCenter(item)"
            :key="item.id"
          >
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
              src="../../image/about/address.png"
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
  components: {
  
  },
  data() {
    return {
       center: {lng: 104.076651, lat: 30.481883},
      zoom: 13,
      headline: [
        { title: "网站首页", path: "/", heigth: "0" },
        { title: "关于我们", path: "/aboutUs", heigth: "0" },
        { title: "产品中心", path: "/about/faceRecognition", heigth: "0" },
        { title: "联系我们", path: "/contactUs", heigth: "0" },
      ],
      product: [
        { title: "人脸识别机", path: "/about/faceRecognition", heigth: "700" },
        { title: "翼闸", path: "/about/wingBrake", heigth: "700" },
        { title: "摆闸", path: "/about/pendulumBrake", heigth: "700" },
        { title: "三辊闸", path: "/about/threeGates", heigth: "700" },
        { title: "平移闸", path: "/about/panBrake", heigth: "700" },
        { title: "全高通闸", path: "/about/qualcommBrake", heigth: "700" },
        { title: "立柱", path: "/about/standColumn", heigth: "700" },
      ],
      color: "",
      fixed: "",
      col: "",
      shad: "",
      flag: false,
    };
  },

  methods: {
      handler ({BMap, map}) {
      var point = new BMap.Point(104.076651, 30.481883)
      map.centerAndZoom(point, 18)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    // getClickInfo (e) {
    //   console.log(e.point.lng)
    //   console.log(e.point.lat)
    //   this.center.lng = e.point.lng
    //   this.center.lat = e.point.lat
    // },
    mousin(index) {
      if (index == 2) {
        this.flag = true;
      }
    },

    mousle() {
      this.flag = false;
    },

    addTil(item) {
      if (item.path == this.$route.path || !item.path) return;
      this.$router.push({ path: item.path, query: { id: item.heigth } });
    },

    productCenter(item) {
      if (item.heigth) {
        window.scrollTo(0, item.heigth);
      }
      if (item.path == this.$route.path) return;
      this.$router.push({ path: item.path, query: { id: item.heigth } });
    },

    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)

      //设置背景颜色的透明读
      if (scrollTop > 100) {
        this.color = "#ffffff";
        this.fixed = "fixed";
        this.col = "#333333";
        this.shad = "0px 4px 4px 0px rgba(9, 9, 9, 0.1)";
      } else if (scrollTop < 100) {
        this.color = "";
        this.fixed = "";
        (this.col = ""), (this.shad = "");
      }
    },
  },
  mounted() {
    // console.log(11)
        // 百度地图API功能
    // var map = new BMap.Map("container"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(104.076651, 30.481883), 18); // 初始化地图,设置中心点坐标和地图级别
    // map.setCurrentCity("成都市"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var point = new BMap.Point(104.076651,30.481883);         
    // map.centerAndZoom(point, 18);
    // var marker = new BMap.Marker(point);        // 创建标注
    // marker.setTitle("锐远电子科技有限公司");
    // map.addOverlay(marker);                     // 将标注添加到地图中
    // marker.setAnimation(Animation);
    window.addEventListener("scroll", this.handleScroll);

  
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.topBox {
  width: 100%;
  height: 90px;
  z-index: 99;
}
.topBox:hover {
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
  .topTil {
    color: #333333;
  }
}
.logoImg {
  width: 160px;
  height: 50px;
}
.dv {
  color: #f07535;
}
.dv1 {
  display: block;
}

.dv2 {
  display: none;
}

.itemBox {
  margin-left: 160px;
  cursor: pointer;
}
.hov {
  &:hover {
    color: #ff6609;
  }
}
.topTil {
  top: 20px;
  width: 1200px;
  height: 60px;
  position: absolute;
  z-index: 9;
  color: #333333;
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
  left: -20px;
  top: 4px;
}

.cur {
  cursor: pointer;
}

.showlod {
  padding-top: 10px;
  position: absolute;
  width: 130px;
  background: #ffffff;
  left: -30px;
}

.bosshow {
  margin-top: 20px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
  padding-bottom: 10px;
}

.itemsshow {
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.Til {
  &:hover {
    margin-top: -2px;
    color: #ff6609;
  }
}

.topLine {
  height: 220px;
}

.contentBox {
  width: 1100px;
}

.connectUs {
  width: 350px;
}

.conTil {
  margin-top: 20px;
  font-size: 36px;
}

.teamworkImg {
  margin-top: 110px;
  width: 550px;
  height: 330px;
  position: relative;
  top: 5px;
}

.mapBox {
  width: 500px;
  height: 500px;
  background: red;
}


.info {
  z-index: 999;
  width: auto;
  min-width: 22rem;
  padding: 0.75rem 1.25rem;
  margin-left: 1.25rem;
  position: fixed;
  top: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  font-size: 14px;
  color: #666;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
</style>