<template>
  <div id="app">
    <p>uso do V-if</p>
    <h1 v-if="state === 'loading'">Loading..</h1>
    <h2 v-else-if="state === 'error'">Erro!!!</h2>
    <h3 v-else>Dados Atualizados com sucesso!</h3>

    <p>Uso do V-bind</p>
    <a v-bind:href="urlGoogle" :style="styleText">Google</a><br>
    <a :href="urlYoutube" :style="styleText">Youtube</a>

    <p>uso das props</p>
    <Title :titulo="1" subtitulo="--------"></Title>
    <Title :titulo="2"></Title>
  </div>
</template>

<script>
import Title from './Title.vue'

export default {
  name: 'App',
  components: {
    Title,
  },
  data(){
    return{
     state:'loading',
     urlGoogle:'www.google.com',
     urlYoutube:'www.youtube.com',
     styleText:{color:'green',textDecoration:'none',fontSize:'20px'},
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
