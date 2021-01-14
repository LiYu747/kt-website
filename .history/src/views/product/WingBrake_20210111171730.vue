<template>
 <div>
   <div class="contentBox flex-d al-center">
          <div class="cTil">翼闸</div>
          <div class="flex al-center m-t1">
              <div class="lline"></div>
              <div class="dot"></div>
              <div class="lline"></div>
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
 .contentBox{
     width: 830px;
  
    margin-left: 50px;
    color: #333333;
 }
 .cTil{
     font-size: 30px;
 }
 .lline{
     width: 24px;
height: 1px;
background: #BFBFBF;
 }
 .dot{
  width: 4px;
height: 4px;
background: #000000;
border-radius: 50%;
margin:  0 3px;
 }
</style>