<template>
  <div>
    <div class="contenBox flex">
      <div
        v-for="item in productLists"
        :key="item.id"
        class="flex itemBox"
      >
        <div class="flex-d m-l2">
          <div class="fz-14 pos-abs">{{ item.title }}</div>
          <div class="itemI flex-d al-center m-t2">
            <img :src="item.image" class="itemImg m-t2" alt="" />
            <div class="m-t1 fz-12">{{ item.model }}</div>
          </div>
        </div>
        <div class="itemPar">
          <div v-for="items in item.parameter" class="m-1-1" :key="items.id">
            {{ items }}
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
      productLists: [
        {
          title: "8寸人脸识别测温门禁机",
          image: require("@/image/face/product1.png"),
          model: "KT721",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：支持22400张人脸库",
            "3.识别距离：0.5~2米",
            " 4.比对记录：最大10万条记录、可导出",
            "5.供电：DC12V",
            "6.测温精度：±0.3℃",
            "7.支持闸机或壁挂",
            "8.人脸测温",
          ],
        },
        {
          title: "7寸人脸识别测温考勤门禁机",
          image: require("@/image/face/product2.png"),
          model: "KT722",
          parameter: [
            "1.显示屏：7寸",
            "2.存储：支持22400张人脸库",
            "3.识别距离：0.5~3米",
            " 4.比对记录：最大10万条记录、可导出",
            "5.供电：DC12V",
            "6.测温精度：±0.5℃",
            "7.支持闸机或壁挂",
            "8.人脸测温",
          ],
        },
        {
          title: "7寸人脸识别手腕测温门禁机",
          image: require("@/image/face/product3.png"),
          model: "KT723",
          parameter: [
            "1.显示屏：7寸",
            "2.存储: 支持10000张人脸比对库",
            "3.识别距离：0.3~1.5米",
            " 4.比对记录：最大8万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.自带遮阳板",
            "8.手腕测温",
          ],
        },
        {
          title: "5寸人脸识别门禁机",
          image: require("@/image/face/product4.png"),
          model: "KT501",
          parameter: [
            "1.显示屏：5寸",
            "2.存储:支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            " 4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持壁挂",
          ],
        },
        {
          title: "7寸人脸识别门禁机",
          image: require("@/image/face/product5.png"),
          model: "KT701",
          parameter: [
            "1.显示屏：7寸",
            "2.存储:支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            " 4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.自带遮阳板",
          ],
        },
        {
          title: "8寸人脸识别+IC卡门禁机",
          image: require("@/image/face/product6.png"),
          model: "KT722",
          parameter: [
            "1.显示屏：8寸",
            "2.存储:支持10000张人脸比对库",
            "3.识别距离：0.5~1.5米",
            " 4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            " 6.支持IC卡识别",
            "7.支持闸机或壁挂",
          ],
        },
        {
          title: "人脸识别腕温扫码一体机",
          image: require("@/image/face/product7.png"),
          model: "",
          parameter: [
            "1.存储:支持10000张人脸比对库",
            "2.识别距离：0.3~1.5米",
            " 3.比对记录：最大6万条记录、可导出",
            "4.支持闸机或壁挂；供电：DC12V",
            "5.自带遮阳板；手腕测温；二维码识别",
            "6.支持双目活体检测",
            "7.采用LINUX操作系统，系统稳定",
            " 8.支持近距离测量体温，并高温报警；IP65级防水防尘",
            "9.支持温度数据接口协议对接",
            "10.接口协议丰富；丰富的硬件接口",
          ],
        },
        {
          title: "人脸识别扫码一体机",
          image: require("@/image/face/product8.png"),
          model: "",
          parameter: [
            "1.存储：10000张人脸比对库",
            "2.识别距离：0.5~1.5米",
            " 3.比对记录：最大6万条记录、可导出",
            "4.支持二维码扫码；带遮阳板",
            "5.支持闸机或壁挂；供电：DC12V",
            "6.支持强逆光环境下运动人脸追踪曝光；支持双目活体检测",
            "7.采用LINUX操作系统，系统稳定",
            "8.独有的人脸识别算法，精准识别人脸，人脸识别时间小于0.5s；IP66级防水、防尘",
            "9.可自动白平衡、手动白平衡",
            "10.接口协议丰富；丰富的硬件接口",
          ],
        },
        {
          title: "8寸人脸识别+IC卡门禁机4G版",
          image: require("@/image/face/product9.png"),
          model: "KT801-4G",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：10000张人脸比对库",
            " 3.识别距离：0.5~1.5米",
            "4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持闸机或壁挂",
            "7.4G模块",
          ],
        },
        {
          title: "8寸人脸识别扫码IC卡一体门禁机",
          image: require("@/image/face/product10.png"),
          model: "KT808",
          parameter: [
            "1.显示屏：8寸",
            "2.存储：10000张人脸比对库",
            " 3.识别距离：0.5~1.5米",
            "4.比对记录：最大6万条记录、可导出",
            "5.供电：DC12V",
            "6.支持IC卡识别",
            "7.支持二维码扫码",
            "8.支持闸机或壁挂",
          ],
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.contenBox {
  margin-left: 40px;
  width: 980px;
  flex-wrap: wrap;
}

.m-1-1 {
  margin-bottom: 6px;
}

.itemBox {
  width: 450px;
  padding-top: 20px;
  background: #ffffff;
  margin-right: 30px;
  margin-bottom: 30px;
  color: #231815;
  padding-bottom: 20px;
}
.itemI{
 width: 140px;
}

.itemImg {
  width: 140px;
  height: 240px;
}

.itemPar {
  margin-top: 50px;
  margin-left: 50px;
  width: 205px;
  font-size: 12px;
}
</style>