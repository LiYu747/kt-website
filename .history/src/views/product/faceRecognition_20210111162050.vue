<template>
  <div>
    <div class="contenBox flex">
      <div v-for="item in productLists" :key="item.id" class="flex itemBox">
      <div class="flex-d al-center m-l2 m-t2 ">
        <div class=" fz-14">{{ item.title }}</div>
        <img :src="item.image" class="itemImg m-t2" alt="" />
        <div class="m-t1">{{ item.model }}</div>
      </div>
      <div class="itemPar">
        <div v-for=" items in item.parameter" class="m-b1" :key="items.id">
          {{items}}
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
          parameter:['1.显示屏：8寸','2.存储：支持22400张人脸库','3.识别距离：0.5~2米',' 4.比对记录：最大10万条记录、可导出','5.供电：DC12V','6.测温精度：±0.3℃','7.支持闸机或壁挂','8.人脸测温']
        },
         {
          title: "7寸人脸识别测温考勤门禁机",
          image: require("@/image/face/product2.png"),
          model: "KT722",
          parameter:['1.显示屏：7寸','2.存储：支持22400张人脸库','3.识别距离：0.5~3米',' 4.比对记录：最大10万条记录、可导出','5.供电：DC12V','6.测温精度：±0.5℃','7.支持闸机或壁挂','8.人脸测温']
        },
         {
          title: "7寸人脸识别手腕测温门禁机",
          image: require("@/image/face/product3.png"),
          model: "KT723",
          parameter:['1.显示屏：7寸','2.存储:支持10000张人脸比对库','3.识别距离：0.3~1.5米',' 4.比对记录：最大8万条记录、可导出','5.供电：DC12V','6.支持闸机或壁挂','7.自带遮阳板','8.手腕测温']
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
.contenBox{
  margin-left: 40px;
  width: 980px;
  flex-wrap: wrap;
}

.itemBox{
  width: 450px;
  height: 340px;
  background: #ffffff;
  margin-right: 30px;
  margin-bottom: 30px;
  color: #231815;
}

.itemPar{
  width: 205px;
  margin-top: 70px;
  margin-left: 20px;
}

.itemImg{
  width: 130px;
  height: 240px;
}
</style>