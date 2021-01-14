<template>
 <div>
   <div class="topBox">
     <div class="backImg">
       <!-- <img src="../image/toplogo.png" class="toplogoImg" alt=""> -->
     </div>
      <div class="text">字体</div>
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
   }
  .toplogoImg{
  
    width: 100%;
    height: 825px;
  }
  .text{
    z-index: 99;
    color:#ffffff;
  }
</style>
