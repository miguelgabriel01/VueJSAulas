<template>
  <div id="app">
    <h1 v-if="state === 'loading'">Loading..</h1>
    <h2 v-else-if="state === 'error'">Erro!!!</h2>
    <h3 v-else>Dados Atualizados com sucesso!</h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
     state:'loading'
    }
  },
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
