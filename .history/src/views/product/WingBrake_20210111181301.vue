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
        <div class="m-t2 m-l2 introctn">
          翼闸是主要针对人员出入口控制管理的高科技产品，是三辊闸和摆闸的升级产品，该设备将机械、电子微处理器控制并集成电子门票系统，门禁考勤系统，停车场系统，人脸识别系统，防静电，指纹，掌纹，虹膜等生物识别系统的整合及运用。
        </div>
      </div>

      <div class="introImg flex ju-center m-t2">
        <img src="../../image/WingBrake/logo1.png" class="logo1Img" alt="" />
        <img src="../../image/WingBrake/logo2.png" class="logo2Img" alt="" />
        <img src="../../image/WingBrake/logo3.png" class="logo3Img" alt="" />
      </div>

      <div class=" m-t5">
        <div class="cTil f-w">详细介绍</div>
        <div class="flex al-center m-t1">
          <div class="llines"></div>
          <div class="dot"></div>
          <div class="llines"></div>
        </div>
      </div>

      <div class="detailBox m-t5">
             <div class="detaCent">
                <div v-for=" item in datailsList" :key="item.id">
                    <div class=" m-b3"> {{item.tiele}}</div>
                    <div v-for='items in item.content' class="itemsTxt" :key="items.id">
                        {{items}}
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
        datailsList:[
            {tiele:'标准产品功能特点：',content:['1）具有故障自检和报警提示功能，方便用户维护及使用；','2）通过主控板上的内置小按盘，可编程设备的运行状态；','3）机械结构、感应双重防夹功能，在伸缩臂复位的过程中遇阻时，自动停止或在默认的时间内电机停止工作，默认延时后再次复位（直到复位为止），且力度很小(≤2Kg)；',
            '4）声、光报警功能：含非法闯入、尾随报警；','5）防冲功能，在没有接收到开闸信号时，摆臂自动锁死；','6）伸缩臂同步功能；','7）具有自动复位功能，开闸后，在规定的时间内未通行时，系统将自动取消用户的此次通行的权限，标准为开启后5秒自动复位；',
            ' 8）断电后通道自动敞开，上电自动闭合；','9）可与多种读卡设备相挂接，接收继电器开关信号工作；','10）可单向或双向控制人员进出；','11）可直接通过管理计算机实现远程控制与管理；','2.2可扩展功能：','1）计数功能；',
            '2）机箱加长，伸缩臂材料选择。']}
        ]
    };
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

.introduceBox {
  width: 100%;
  height: 90px;
  background: #ffffff;
  color: #221815;
}
.introctn {
  text-indent: 2em;
  line-height: 22px;
}

.logo1Img {
  width: 315px;
  height: 208px;
  position: relative;
  left: 90px;
  top: 56px;
}

.logo2Img {
  width: 470px;
  height: 248px;
  position: relative;
  left: 20px;
}

.logo3Img {
  width: 300px;
  height: 190px;
  position: relative;
  right: 90px;
  top: 43px;
}

.llines{
    width: 56px;
  height: 2px;
  background: #bfbfbf;
}

.detailBox{
    width: 100%;
    background: #ffffff;
    color: #333333;
}

.f-w{
    font-weight: 400;
}

.detaCent{
    margin-top: 20px;
    margin-left: 30px;
    width: 760px;
}

.itemsTxt{
    margin-bottom: 8px;
}
</style>