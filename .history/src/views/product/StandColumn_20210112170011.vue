<template>
  <div>
    <div class="contenBox flex">
      <div v-for="item in productLists" :key="item.id" class="flex itemBox pos-rel">
      <div class="flex-d itemR al-center  m-l2 m-t2 " :class="!item.parameter?'dv':''">
        <div class=" fz-14">{{ item.title }}</div>
          <img :src="item.image" class="m-t2" :style="item.style" alt="" />
        <div class="m-t1 fz-12">{{ item.model }}</div>
      </div>
      <div class="itemPar ">
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
         {
          title: "立柱",
          image: require("@/image/StandColumn/logo2.png"),
          model: "CX201",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:1100mm']
        },
         {
          title: "60cm立柱",
          image: require("@/image/StandColumn/logo2.png"),
          model: "CX202",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:600mm']
        },
          {
          title: "身份证立柱",
          image: require("@/image/StandColumn/logo3.png"),
          model: "CXS301",
          parameter:['1. 材料:铝合金','2. 电源:12 v','3. DC: 1个DC,2个DC(分别为主机和LED供电)','4. 主机尺寸:301.45 * 280.03 * 1114.67毫米','5. 颜色:闪亮的银','6. 电源:≤3',
          '7. 最大功耗:≤13.5W','8. 存储温度:-20℃-60℃','9. USB接口:USB * 2','10. 底座尺寸:301*280mm','11. 高度:1100mm']
        },
           {
          title: "桌面立柱",
          image: require("@/image/StandColumn/logo4.png"),
          model: "CX301",
          parameter:['1. 底座厚3.8CM','2. 自带两个USB接口','3. 底座自带调节螺丝','4. 酷炫蓝色灯带','5. 冷轧板环保烤漆']
        },
         {
          title: "三角支架",
          image: require("@/image/StandColumn/logo5.png"),
          model: "SJ101",
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
  padding: 20px 0;
  background: #ffffff;
  margin-right: 30px;
  margin-bottom: 30px;
  color: #231815;
}



.itemPar{
  width: 220px;
}

.itemR{
  width: 140px;
}

.dv{
  width: 450px;
}
</style>