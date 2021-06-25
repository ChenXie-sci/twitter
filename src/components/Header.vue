<template>
  <div class="header">
    <button class="twotter" @click="addRoutes1"> Twotter</button>
   </div>  
</template>

<script>
export default {
    name: "Header",
    methods:{
      addRoutes1 (){
        this.$router.push('/')
      }
    }
};

</script>

<style scoped>
.header{
  background-color: purple;
  height: 30px;
}
.twotter{
  background-color:purple;
  border: 0px;
  color:white;
}
</style>