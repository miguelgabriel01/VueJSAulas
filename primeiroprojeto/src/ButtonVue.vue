<template>
 <button @click="click">{{count}} || times</button>
</template>

<script>
export default {
  name: "ButtonVue",
  data(){
    return {
      count: 0,
    };
  },
  methods:{
    click(){
      this.count++;
    },
  },
}
</script>

<style lang="scss">

</style>
