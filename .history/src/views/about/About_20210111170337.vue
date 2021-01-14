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
          <div v-for="(item,index) in product" class="itemBox flex al-center" @click="sclect(item)" :class="index==product.length-1?'dv':''" :key="item.id">
             <div class=" m-l4" :class="$route.path==item.path?'color':''"> {{item.title}}</div>
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
         product:[{title:'人脸识别机',path:'/about/faceRecognition'},{title:'翼闸',path:'/about/wingBrake'},{title:'摆闸'},{title:'三辊闸'},{title:'平移闸'},{title:'全高通闸'},{title:'立柱'}],
     }
   },
   methods: {
    // 选择产品名称
    sclect(item){
      this.$roter.params({path:item.pdth})
    }
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
  width: 1300px;
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
  margin-bottom: 20px;
}

.itemBox{
  height: 45px;
  border-bottom: 1px solid #cccccc;
  font-size: 16px;
}

.dv{
  border-bottom: none;
}

.color{
  color: #EC651E;
}
</style>