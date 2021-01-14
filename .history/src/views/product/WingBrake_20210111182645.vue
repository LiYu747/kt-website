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

      <div class="m-t5">
        <div class="cTil f-w">详细介绍</div>
        <div class="flex al-center m-t1">
          <div class="llines"></div>
          <div class="dot"></div>
          <div class="llines"></div>
        </div>
      </div>

      <div class="detailBox m-t5 m-b5">
        <div class="detaCent">
          <div v-for="item in datailsList" class="m-b3" :key="item.id">
            <div class="m-b3">{{ item.tiele }}</div>
            <div v-for="items in item.content" class="itemsTxt" :key="items.id">
              {{ items }}
            </div>
          </div>
          <div>备注：实际产品与样图稍有差异。</div>
          <div class="m-t4 m-b4">
            所有翼闸产品的功能都是一样的，区别就在于产品的外观和尺寸。其功能和技术参数都是标准设备的参数，本公司也可以根据用户的要求而设定，所有设备都可以配合门禁、指纹机、人脸识别、二维码、景区票务、车站票务、等使用。
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
      datailsList: [
        {
          tiele: "标准产品功能特点：",
          content: [
            "1）具有故障自检和报警提示功能，方便用户维护及使用；",
            "2）通过主控板上的内置小按盘，可编程设备的运行状态；",
            "3）机械结构、感应双重防夹功能，在伸缩臂复位的过程中遇阻时，自动停止或在默认的时间内电机停止工作，默认延时后再次复位（直到复位为止），且力度很小(≤2Kg)；",
            "4）声、光报警功能：含非法闯入、尾随报警；",
            "5）防冲功能，在没有接收到开闸信号时，摆臂自动锁死；",
            "6）伸缩臂同步功能；",
            "7）具有自动复位功能，开闸后，在规定的时间内未通行时，系统将自动取消用户的此次通行的权限，标准为开启后5秒自动复位；",
            " 8）断电后通道自动敞开，上电自动闭合；",
            "9）可与多种读卡设备相挂接，接收继电器开关信号工作；",
            "10）可单向或双向控制人员进出；",
            "11）可直接通过管理计算机实现远程控制与管理；",
            "2.2 可扩展功能：",
            "1）计数功能；",
            "2）机箱加长，伸缩臂材料选择。",
          ],
        },
        {
          tiele: "标准技术参数",
          content: [
            "◇机箱尺寸：1200*300*980mm（尺寸长度可定制）",
            "◇伸缩臂长： 260mm，颜色可选择（透明、、蓝色、红色）",
            "◇最大通道宽度：600mm",
            "◇重量： 约50Kg",
            "◇机箱材料： 国产标准(304号)不锈钢 顶盖1.50MM,机箱1.2mm(材质厚度可定制）",
            "◇电 源：明伟 AC220±10% V,50HZ",
            "◇驱动电机： 台邦 直流有刷电机（24V）",
            "◇输入接口： 继电器开关信号或12V电平信号或脉宽＞100ms的12V脉冲信号，驱动电流＞10mA",
            "◇正常使用寿命：300万次",
            "◇通信接口： RS485标准",
            "◇LED指示灯",
            "◇红外 ： 4对（可增加）",
            "◇读卡窗 :可定制",
            "◇通行速度：30-40人/分钟",
            "◇闸门开、关时间： 0.6秒",
            "◇上电后进入通行状态所需时间： 3秒",
            "◇出现故障后的自动复位时间：10秒",
            "◇工作环境：",
            "室内、室外（阴棚）",
            "温度：-10℃—— 50℃",
            "相对湿度：≤90%，不凝露",
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

.llines {
  width: 56px;
  height: 2px;
  background: #bfbfbf;
}

.detailBox {
  width: 100%;
  background: #ffffff;
  color: #333333;
}

.f-w {
  font-weight: 400;
}

.detaCent {
  margin-top: 20px;
  margin-left: 30px;
  width: 760px;
}

.itemsTxt {
  margin-bottom: 8px;
}
</style>