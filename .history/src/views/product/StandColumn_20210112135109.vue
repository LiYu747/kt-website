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
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 651.1毫米','5. 颜色:白色','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度可调，最小0.65米，最大1.18米']
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
  top: 40px;
  right: 40px;
}

.itemR{
  width: 140px;
}
</style>