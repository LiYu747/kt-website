<template>
  <div>
    <div class="contentBox flex-d al-center">
      <div class="cTil">全高通闸</div>
      <div class="flex al-center m-t1">
        <div class="lline"></div>
        <div class="dot"></div>
        <div class="lline"></div>
      </div>

      <div class="introduceBox m-t1">
        <div class=" introctn">
        转闸主要分全高转闸、半高转闸。然后就有分单向转闸、90°转闸、120°转闸等。转闸适用于严格的管制制区，可有效防止攀爬，通行人员在通过转闸时，受管理权限控制的转闸可以拒绝没有权限的人员进入，如通过权限允许通过，转闸会自动放行。通行速度约每分钟可30-40人。转闸主要适用场所包括：监狱、军事管理区及进出入管理非常严格的工厂(例如化工厂，建筑工地等）。该设备的机械部分包含一个紧急控制装置，在断电时，中心转臂可自由转动，通电时自动锁合。保证通道通畅。
        </div>
      </div>

      <div class="introImg flex ju-center m-t2">
        <img src="../../image/QualcommBrake/logo1.png" class="logo1Img" alt="" />
        <img src="../../image/QualcommBrake/logo2.png" class="logo2Img" alt="" />
        <img src="../../image/QualcommBrake/logo3.png" class="logo3Img" alt="" />
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
            "◇独特的双向防反转功能",
            "◇具有断电双双向自由通行，通电自动恢复锁定功能，以便在紧急情况下能快速组织人员疏散，符合消防标准",
            "◇采用了独特的传动系统，使闸机在零位锁定、解锁更加准确、可靠",
            "◇具有统一、标准的对外接电接口，可与门禁考勤系统、进店门票系统、生物识别系统、静电测试仪器等设备衔接，便于系统集成，并可通过管理计算机实现远程控制与管理",
            "◇整个系统运行平稳，噪音小、不需要维护保养",
            '◇机体全国标不锈钢，防雨水，美观大方',
          ],
        },
         {
          tiele: "全高转闸的种类",
          content: [
            "◇按通行方向可分为：单向全高转闸，双向全高转闸",
            "◇按通行方式可分为：电动全高转闸，手动全高转闸",
            "◇按样式可分为：双通道全高转闸，单通道全高转闸",
            "◇按通行模式可分为：机械电动全高转闸，半自动全高转闸，全自动全高转闸",
            "◇按制动方式可分为：半自动制动全高转闸，全自动制动全高转闸(此类型属于高档闸机类型，国外主流)",
          ],
        },
        {
          tiele: "产品参数",
          content: [
            "◇电源供应：单向AC220V，3A，50/60Hz",
            "◇控制电压：DC24V，小号45W",
            "◇电磁：duty cycle 100%",
            "◇减震器：液压",
            "◇工作环境温度：-20℃~60℃",
            "◇工作环境适度：0~90%RH(无凝露)",
            "◇净重250KG",
            "◇保护等级：IP45",
            "可选部分",
            "◇每个人口通道和每个控制方向均有计数设备，可以重置或者没有，电子或机械的控制",
            "◇带有红色禁止和绿色通行箭头的显示窗",
            "◇显示经授权的用户通过通道的功能窗口",
            "◇为操作温度提高的加热系统可以到-20摄氏度",
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
  width: 208px;
  height: 194px;
  position: relative;
  left: -50px;
  top: 30px;
}

.logo2Img {
  width: 221px;
  height: 221px;
  position: relative;
//   left: -120px;
//   top: 20px;
}

.logo3Img {
  width: 270px;
  height: 198px;
  position: relative;
//   left: -130px;
//   top: 60px;
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