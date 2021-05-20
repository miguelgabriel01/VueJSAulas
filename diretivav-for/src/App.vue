<template>
  <div id="app">
    <h1>Diretivas v-for</h1>
    <p>com array</p>
    <ul>
      <li v-for="(item,index) in todos" :key="index">
        {{item}}
      </li>
    </ul>
    <p>com objetos</p>
        <ul>
      <li v-for="(item2,chave,index) in todos2" :key="index">
        {{chave}}:{{item2}}-{{index}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      todos:['item 1','item 2','item 3'],
      todos2:{
        item1:'item um',
        item2:'item dois',
      }
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
