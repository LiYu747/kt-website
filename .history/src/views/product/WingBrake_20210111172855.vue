<template>
  <div>
    <div class="contentBox flex-d al-center">
      <div class="cTil">翼闸</div>
      <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
      </div>

      <div class="introduceBox m-t1">
       <div class=" m-t2 m-l2 introctn">
           &#12288;翼闸是主要针对人员出入口控制管理的高科技产品，是三辊闸和摆闸的升级产品，该设备将机械、电子微处理器控制并集成电子门票系统，门禁考勤系统，停车场系统，人脸识别系统，防静电，指纹，掌纹，虹膜等生物识别系统的整合及运用。
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.contentBox {
  width: 830px;
  margin-left: 50px;
  color: #333333;
}

.cTil {
  font-size: 30px;
  font-weight: 700;
}

.lline {
  width: 24px;
  height: 2px;
  background: #bfbfbf;
} 

.dot {
  width: 4px;
  height: 4px;
  background: #000000;
  border-radius: 50%;
  margin: 0 3px;
}

.introduceBox{
    width: 100%;
    height: 90px;
    background: #ffffff;
    color: #221815;
}
.introctn{
    
line-height: 22px;
}
</style>