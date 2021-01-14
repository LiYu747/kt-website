<template>
 <div>
   <div class="contentBox flex-d al-center">
          <div class="cTil">翼闸</div>
          <div class="flex al-center">
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
     height: 600px;
    background: red;
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
  width: 3px;
height: 3px;
background: #000000;
border-radius: 50%;
margin:  0 3px;
 }
</style>