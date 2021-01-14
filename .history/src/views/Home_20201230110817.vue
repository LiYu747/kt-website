<template>
 <div>
   <div class="topBox">
     <div class="text">字体</div>
     <div class="backImg">
       <img src="../image/toplogo.png" class="toplogoImg" alt="">
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
   .backImg{
       position: absolute;
    top: 0;
   }
  .toplogoImg{
  
    width: 100%;
    height: 825px;
  }
  .text{
    z-index: 99;
  }
</style>
