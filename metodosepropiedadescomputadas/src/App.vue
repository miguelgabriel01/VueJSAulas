<template>
  <div id="app">
    <button @click="nome = 'novo biel'">Click</button><br>
<!--     {{ count }}<br>
    <small>pimeira vez</small><br>
    {{fullName}}<br>
 -->    <small>segunda vez</small><br> 
    {{fullName}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      count: 0,
      nome: 'Miguel',
      sobrenome: 'Gabriel'
    }
  },
  computed:{
   fullName(){
     //return Math.random();
     return this.nome + " " + this.sobrenome;
   }
  },
  methods:{
   Increment(){
     this.count++
   }
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
