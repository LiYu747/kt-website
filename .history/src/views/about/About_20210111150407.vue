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
}
</style>