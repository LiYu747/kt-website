<template>
 <div>
   <router-view/>
    <div class="endMark flex ju-center">
        <div class="endCentent flex">
          <!-- 快速导航 -->
          <div> 
            <div class="endTil">快速导航</div>
            <div v-for=" item in headline" class=" m-b3" :key="item.id">
              {{item.title}}
            </div>
          </div>
          <!-- 产品中心 -->
          <div class=" pos-rel m-left"> 
            <div class="endTil">产品中心</div>
            <div v-for=" item in product" class=" m-b3" :key="item.id">
              {{item.title}}
            </div>
          </div>
          <!-- 联系我们 -->
          <div class=" pos-rel contactUs">
             <div class="endTil">联系我们</div>
             <div class="m-b3">
               电话：028-63828442
             </div>
              <div class="m-b3">
               手机：13060035586
             </div>
               <div class="m-b3">
               邮箱：3107874946@qq.com
             </div>
                <div class="m-b3">
               地址：成都市天府新区复地·御香山3悦写字楼67栋二单元5楼503室
             </div>
          </div>
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
 headline: [{title:'网站首页'},{title:'关于我们'},{title:'产品中心'},{title:'联系我们'}],
      product:[{title:'人脸识别机'},{title:'翼闸'},{title:'摆闸'},{title:'三辊闸'},{title:'平移闸'},{title:'全高通闸'},{title:'立柱'}],
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.endMark{
  width: 100%;
  height: 500px;
  background:#333333;
}

.endCentent{
  margin-top: 70px;
  width: 1200px;
  height: 400px;
  color: #ffffff;
  font-size: 16px;
}

.endTil{
font-size: 24px;
margin-bottom: 40px;
}

.m-left{
  left: 330px;
}

.contactUs{
  width: 360px;
  left: 570px;
}
</style>