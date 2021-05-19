<template>
  <div id="app">
    <button @click="count++">Click</button>
    {{ count }}
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      count:0,
    } 
  },
  mounted(){//quando o componente é renderizado na tela
   console.log(this);
   console.log(this.count);
   this.count = 100;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
