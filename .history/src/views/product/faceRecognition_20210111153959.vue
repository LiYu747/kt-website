<template>
 <div>
  <div v-for="item in productLists" :key="item.id">
    <div class=" flex-d al-center">
       <div>{{item.title}}</div>
    <img :src="item.image" alt="">
    <div>{{item.model}}</div>
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
        productLists:[{
          title:'8寸人脸识别测温门禁机',
          image:require('@/image/face/product1.png'),
          model:'KT721'
        }]
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

</style>