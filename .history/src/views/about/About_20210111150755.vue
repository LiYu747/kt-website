<template>
 <div class=" back flex-d al-center">
      <div>
        <img src="../../image/about/toplogo.png" class="toplogoImg" alt="" />
      </div>

      <div class="cententBox flex">
         <div class="tabbar">
          <div class="tabTil">
            产品中心
          </div>
          <div v-for="item in product" :key="item.id">
              {{item.titel}}
          </div>
         </div>
         <div>
            <router-view/>
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
.back{
  width: 100%;
  background: #f5f5f5;
}

.toplogoImg {
  width: 100%;
  height: 700px;
}

.cententBox{
  margin-top: 130px;
  width: 1200px;
  height: 600px;
  background: red;
}

.tabbar{
  width: 300px;
  height: 400px;
  background: #ffffff;
}

.tabTil{
  color: #040000;
  font-size: 20px;
  margin-top: 30px;
  margin-left: 40px;
}
</style>