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
        <img src="../../image/ThreeGates/logo1.png" class="logo1Img" alt="" />
        <img src="../../image/ThreeGates/logo2.png" class="logo2Img" alt="" />
        <img src="../../image/ThreeGates/logo3.png" class="logo3Img" alt="" />
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
              所有三辊闸的功能都是一样的，区别就在于产品的外观和尺寸，其功能和技术参数都是标准设备的参数，本公司也可以根据用户的要求而设定，所有设备都可以配合门禁、指纹机使用，可构成一套完善的门禁考勤系统。
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
          tiele: "产品主要技术参数",
          content: [
            "◇结构：框架结构/不锈钢外壳",
            "◇生产工艺：全电脑数控激光切割机生产",
            "◇外形尺寸：（立式长420×宽330×高980mm）；  （桥式长 1200×宽280×高980 mm）",
            "◇重量：（立式40Kg） （桥式70KG）",
            "◇闸杆长：机箱以外500(mm)",
            "◇闸杆最大承受力：80Kg",
            "◇闸杆工作驱动力：3Kg",
            "◇闸杆传动方式：数字方式",
            "◇闸杆转向：单向、双向（可选）；具有多种工作模式可供选择，即可双向读卡限流，也可一边读卡、另一方向禁行，一边读卡、另一方向自由通行",
            "◇自动复位功能：开闸后，在规定的时间内未通行系统将自动上锁，通行时间可调",
            "◇灯光提示：通行方向指示",
            "◇对输入控制信号没有延时要求",
            "◇工作环境：室内、室外(阴棚）",
            "◇温度：-10℃ ～ 50℃ 相对湿度：≤90%，不凝露",
            "◇感应卡读卡口尺寸：配带标准安装支架，或度身定做",
            "◇开闸时间：0.2秒",
            "◇通行速度：30人/分钟",
            '◇通讯接口：标准RS485接口，距离≤1200米',
            '◇输入接口：干接点信号或+12V电平信号或脉宽≥100ms的DC12V脉冲信号，驱动 电流≥10mA。'
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
//   width: 388px;
//   height: 204px;
  position: relative;
  left: 270px;
  top: 30px;
}

.logo2Img {
//   width: 437px;
//   height: 183px;
  position: relative;
  left: 160px;
//   top: 60px;
}

.logo3Img {
//   width: 286px;
//   height: 223px;
  position: relative;
  right: 90px;
  top: 10px;
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