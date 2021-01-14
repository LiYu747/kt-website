<template>
  <div>
    <div class="contenBox flex">
      <div v-for="item in productLists" :key="item.id" class="flex itemBox pos-rel">
      <div class="flex-d itemR al-center  m-l2 m-t2 ">
        <div class=" fz-14">{{ item.title }}</div>
          <img :src="item.image" class="itemImg m-t2" alt="" />
        <div class="m-t1">{{ item.model }}</div>
      </div>
      <div class="itemPar">
        <div v-for=" items in item.parameter" class="m-1-1" :key="items.id">
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
          title: "伸缩立柱",
          image: require("@/image/StandColumn/logo1.png"),
          model: "CX101",
          parameter:['1.显示屏：8寸','2.存储：支持22400张人脸库','3.识别距离：0.5~2米',' 4.比对记录：最大10万条记录、可导出','5.供电：DC12V','6.测温精度：±0.3℃','7.支持闸机或壁挂','8.人脸测温']
        },
      ],
    };
  },
  methods: {},
  mounted() {
  },
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

.m-1-1{
  margin-bottom: 6px;
}

.itemBox{
  width: 450px;
  height: 340px;
  background: #ffffff;
  margin-right: 30px;
  margin-bottom: 30px;
  color: #231815;
}

.itemImg{
  width: 40px;
  height: 200px;
}

.itemPar{
  position: absolute;
  width: 205px;
  top: 60px;
  right: 40px;
}

.itemR{
  width: 200px;
  background: red;
}
</style>