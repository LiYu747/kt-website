<template>
  <div>
    <div class="contentBox flex-d al-center">
      <div class="cTil">摆闸</div>
      <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
      </div>

      <div class="introduceBox m-t1">
        <div class=" introctn">
         智能摆闸是经过多年精心开发、研制、生产的智能化通道管理设备，是主要针对人员通道进行智能管理的高科技产品。该设备将机械、电子、微处理器控制及各种身份识别技术有机地融为一体，通过选配各种身份识别系统设备和采用性能可靠的安全保护装置、报警装置、方向指示、以及扩展友好的LED计数显示界面，协调实现对通道智能化控制与管理等。配有主控箱，线路清晰明了，即便是初次接触也可以在技术员电话指导下检查线路故障及维护！ 
         智能摆闸能方便兼容IC卡、ID卡、条码卡、指纹等读卡识别设备的使用，为出入人员提供文明、有序的通行方式，有效管理人员进出。可广泛应用于车站、码头、地铁、工厂、大厦、智能小区、宾馆、会所、企事业单位等需要对通道实现智能化管理的场合。
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
          tiele: "标准产品功能特点：",
          content: [
            "1）具有故障自检和报警提示功能，方便用户维护及使用；",
            "2）通过主控板上的内置小按盘，可编程设备的运行状态；",
            "3) 机械结构防夹、防碰伤功能，在摆臂复位的过程中遇阻时，在规定的时间内电机自动停止工作，默认延时后再次复位（直到复位为止），且力度很小(≤2Kg)；",
            "4）防冲功能，在没有接收到开闸信号时，摆臂自动锁死；",
            "5）摆臂同步可调（针对双摆情况）；",
            "6) 具有自动复位功能，开闸后，在规定的时间内未通行时，系统将自动取消用户的此次通行的权限；",
            "7）可调节常开或常闭，以满足不同场地的要求；",
            "8）可与多种读卡设备相挂接，接收继电器开关信号工作；",
            "9）单向、双向摆功能，可单向或双向控制人员进出；",
            "10）可直接通过管理计算机实现远程控制与管理；",
            "11）延时自动复位，标准为开启后5秒自动复位；",
            '12）断电摆臂自动摆开、上电自动闭合，符合消防要求；',
            '13）声（光）报警功能，含非法闯入报警、(反向闯入关闸)；等；',
            '14）计数功能（可选配）；',
            '15）防夹功能；',
            '16）精准的逻辑判断、红外复位功能；',
            '17）语音输出，人性化提示正确通行（可选配）。',
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
  left: 20px;
  top: 50px;
}

.logo3Img {
  width: 286px;
  height: 223px;
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