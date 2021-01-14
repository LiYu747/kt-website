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
        <div class=" introctn">
         三辊闸外形采用国产标准(304号)不锈钢板冲压成型， 造型美观大方，防锈、耐用，能抵抗外力破坏。长方形机箱与通道闸杆构成的通道可为出 入人员提供有序文明的 通 行方式，杜绝非法出入，并在紧急情况下快速控制落杆或收杆。独有的减震装置让闸机运行噪音更小，配有主控箱，线路清晰明了，即便是初次接触也可以在技术员电话指导下检查线路故障及维护！
        </div>
      </div>

      <div class="introImg flex ju-center m-t2">
        <img src="../../image/PendulumBrake/logo1.png" class="logo1Img" alt="" />
        <img src="../../image/PendulumBrake/logo2.png" class="logo2Img" alt="" />
        <img src="../../image/PendulumBrake/logo3.png" class="logo3Img" alt="" />
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
              所有摆闸的功能都是一样的，区别就在于产品的外观和尺寸，以上摆闸的功能和技术参数都是标准设备的参数，本公司也可以根据用户的要求而设定，所有设备都可以配合门禁、指纹机、人脸识别、人证合一、票务系统、等使用。
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
          tiele: "三辊闸功能特点：",
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
            '3、机械三辊闸：',
            '◇独特的定位、复位系统：自动复位，能够始终保持其一根杆处于水平位置',
            '◇属于纯机械传动产品，无电控操作，具有结构简单、可靠性高',
            '◇不用维护等特点，适用于单向限流管理的场所。'
          ],
        },
        {
          tiele: "标准技术参数",
          content: [
            "◇机箱材料： 国产标准(304号)不锈钢",
            "◇机箱尺寸： （标准款）1200长*210宽*980高（MM）（可根据客户需要定制尺寸）",
            "◇摆臂长： 小于730mm",
            "◇重量：80Kg",
            "◇摆臂传动角度：180度",
            "◇摆动方向： 单向或双向",
            "◇工作电压： AC220 ±10% V/50 ±10% HZ",
            "◇驱动电机：  品牌：台邦 直流有刷、无刷电机（24V）",
            "◇输入接口： 干接点信号或12V电平信号或脉宽≥100ms的12V脉冲信号，驱动电流≥10mA",
            "◇通信接口： RS485标准 距离≤1200米",
            "◇LED指示灯： 顶部1个(默认)  红外:4对(默认)  读卡窗： 2个",
            "◇通行速度： 40人/分钟（常开），25-30人/分钟（常闭）",
            "◇闸门开、关时间： 1-2秒",
            "◇上电后进入通行状态所需时间： 3秒",
            "◇出现故障后的自动复位时间：10秒",
            "◇工作环境：室内、室外（阴棚）",
            "◇温度：-10℃—— 50℃ 相对湿度：≤90%，不凝露",
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
  width: 388px;
  height: 204px;
  position: relative;
  left: 100px;
  top: 15px;
}

.logo2Img {
  width: 437px;
  height: 183px;
  position: relative;
//   left: 20px;
  top: 60px;
}

.logo3Img {
  width: 286px;
  height: 223px;
  position: relative;
  right: 90px;
  top: 25px;
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