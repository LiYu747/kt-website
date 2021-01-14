<template>
 <div class=" flex-d al-center">
      <div class="toplogoImg pos-rel flex-d al-center">
        <img src="../../image/aboutUs/toplogo.png" class="toplogoImg" alt="" />
        <div>
            <img src="../../image/aboutUs/logo2.png"  class="logo2Img pos-abs" alt="">
      </div>
      </div>
      <div class="ontentBox">

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

.toplogoImg {
  width: 100%;
  height: 100%;
}
.logo2Img{
    width: 80px;
    height: 80px;
    bottom: 170px;
    margin-left: -40px;
}

.ontentBox{
    margin-top: 120px;
    width: 1200px;
    height: 600px;
    background: red;
}
</style>