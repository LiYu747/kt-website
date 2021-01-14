<template>
  <div>
    <div class="contentBox flex-d al-center">
      <div class="cTil">三辊闸</div>
      <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
      </div>

      <div class="introduceBox m-t1">
        <div class=" introctn fz-12">
         三辊闸外形采用国产标准(304号)不锈钢板冲压成型， 造型美观大方，防锈、耐用，能抵抗外力破坏。长方形机箱与通道闸杆构成的通道可为出 入人员提供有序文明的 通 行方式，杜绝非法出入，并在紧急情况下快速控制落杆或收杆。独有的减震装置让闸机运行噪音更小，配有主控箱，线路清晰明了，即便是初次接触也可以在技术员电话指导下检查线路故障及维护！
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

      <div class="detailBox m-t5 m-b5 fz-12">
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
          tiele: "三辊闸功能特点",
          content: [
            "1.全自动三辊闸：",
            "◇兼容IC、ID、磁卡、条码卡、防静电等多种控制设备",
            "◇闸杆运行平稳、低躁音",
            "◇具有断电应急功能，闸杆断电自动落杆，通电自动上杆",
            "◇控制板带有计数功能，LED数字显示功能(可选)",
            "◇控制板带有记忆功能",
            "◇有标准的输入、输出接口，是系统集成商的最佳首选",
            '2.半自动三辊闸：',
            '◇兼容IC、ID、磁卡、条码卡、防静电等多种控制设备',
            '◇闸杆解锁，迅速可靠',
            '◇具有断电应急功能，闸杆断电自动落杆，通电手抬上杆',
            '◇控制板带有计数功能，LED数字显示功能(可选)',
            '◇控制板带有记忆功能',
            '◇有标准的输入、输出接口，是系统集成商的最佳首选',
            '3.机械三辊闸：',
            '◇独特的定位、复位系统：自动复位，能够始终保持其一根杆处于水平位置',
            '◇属于纯机械传动产品，无电控操作，具有结构简单、可靠性高',
            '◇不用维护等特点，适用于单向限流管理的场所。'
          ],
        },
         {
          tiele: "适用范围",
          content: [
            "◇车站、码头、旅游景点进出口通道管理",
            "◇会展、游泳馆等验票通道管理",
            "◇企事业单位进出口考勤、门禁、消费管理",
            "◇特殊通道控制",
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
  height: 240px;
  position: relative;
  left: 270px;
  top: 60px;
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