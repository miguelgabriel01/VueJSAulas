<template>
  <h1>Hello world</h1>
</template>

<script>
export default {
  name:'Title',
  data(){
    return{
      hello:'world new day',
    }
  },
  beforeCreate(){
   console.log("BeforeCreate");
   console.log(this.hello);
  },
  created() {
    console.log("created");
       console.log(this.hello);
  },
}
</script>

<style lang="scss">

</style>