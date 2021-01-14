<template>
  <div>
    <div v-for="item in productLists" :key="item.id">
      <div class="flex-d al-center">
        <div>{{ item.title }}</div>
        <img :src="item.image" alt="" />
        <div>{{ item.model }}</div>
      </div>
      <div>
        <div v-for=" items in item.parameter" :key="items.id">
          {{items}}
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
</style>