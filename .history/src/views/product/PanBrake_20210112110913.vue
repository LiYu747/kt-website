<template>
  <div>
    <div class="contentBox flex-d al-center">
      <div class="cTil">平移闸</div>
      <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
      </div>

      <div class="introduceBox m-t1">
        <div class=" introctn">
         智能平移闸(档闸)是主要针对人员通道进行智能管理的高科技产品，是智能三辊闸和摆闸的升级产品，该产品加工精细、功能齐全、档次高，主要用于高档小区、智能大厦、宾馆、地铁、码头、会所等高档场所。该设备将机械、电子、微处理器控制及各种身份别技术有机地融为一体，方便兼容IC卡、ID卡、条码卡、指纹等读卡识别设备的使用，通过选配各种身份识别系统设备和采用性能可靠的安全保护装置、报警装置、方向指示等，协调实现对通道智能化控制与管理等。 
        </div>
      </div>

      <div class="introImg flex ju-center m-t2">
        <img src="../../image/PanBrake/logo1.png" class="logo1Img" alt="" />
        <img src="../../image/PanBrake/logo2.png" class="logo2Img" alt="" />
        <img src="../../image/PanBrake/logo3.png" class="logo3Img" alt="" />
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
          tiele: "功能特点",
          content: [
            "◇具有故障自检和报警提示功能，方便用户维护及使用",
            "◇通过主控板上的内置按钮可自行调节设备的运行模式，更人性化",
            "◇机械结构、感应双重防夹功能，在摆臂复位的过程中遇到阻碍时，自动停止或在默认时间内电机停止工作，默认延时后再次复位，且力度很小(≤2KG)",
            "◇声、光报警功能：含非法闯入，尾随报警",
            "◇防冲功能，在没有接收到开闸信号时，摆臂自动锁死，行人从相反方向进入通道，立刻报警",
            "◇防尾随功能，防止一次过多人的非允许情况",
            '◇具有自动复位功能，即获得过闸权限后，在设定的时间内没有过闸，闸机自动取消本次权限',
            '◇断电后摆臂自动打开，通电后自动关闭，符合消防安全标准',
            '◇具有个性的安装界面，兼容IC、ID等智能卡',
            '◇可扩展为自动身份识别系统，直接通过管理计算机远程控制同时实现门禁、考勤、消费以及其他功能',
          ],
        },
         {
          tiele: "产品优点",
          content: [
            "1、通行速度较快，与翼闸类似",
            "2、安保性较强，由于拦阻体面积较大，可以有效防止行人上爬下钻非法通行",
            "3、外观形态非常美观",
            "4、通道宽介于三锟闸和摆闸之间，一般在550mm-900mm之间",
            '5、紧急情况下闸翼会快速缩回箱体中，可以很方便的形成无障碍通道，提高通行速度，易于行人疏散'
          ],
        },
        {
          tiele: "技术参数",
          content: [
            "◇机箱尺寸：1400长*300宽*1000高(MM)",
            "◇机箱材料：国际标准304号不锈钢，厚度1.5MM",
            "◇工作环境：室内、室外温度：-40℃-80℃",
            "◇工作环境：室内、室外(配防雨架)",
            "◇驱动电机：步进电机(140W/24V)",
            "◇输入接口：继电器开关信号",
            "◇读卡窗：2个",
            "◇电源电压：AC200±10%V，50HZ",
            "◇电机转速：160转/分",
            "◇通信接口：Rs485标准",
            "◇正常使用寿命：500万次",
            "◇通行速度：30-60人/分钟",
            "◇上电后进入通行状态所需时间：3秒",
            "◇重量：140KG",
            "◇湿度：5%-9%",
            "◇翼开、关时间：1秒",
            "◇出现故障后的自动复位时间：10秒产品优点",
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
  background: #ffffff;
  color: #221815;
}
.introctn {
    margin: 20px;
  text-indent: 2em;
  line-height: 22px;
}

.logo1Img {
  width: 468px;
  height: 246px;
  position: relative;
//   left: 270px;
//   top: 30px;
}

.logo2Img {
  width: 423px;
  height: 222px;
  position: relative;
//   left: 160px;
//   top: 60px;
}

.logo3Img {
//   width: 286px;
//   height: 223px;
  position: relative;
//   right: 90px;
//   top: 10px;
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