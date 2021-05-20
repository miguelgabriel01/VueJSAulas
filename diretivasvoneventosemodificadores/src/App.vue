<template>
  <div id="app">
    <h1>Diretivas V-on || Eventos || Modificadores</h1>
    <button @click="count1++"> Click 1 com expressão || {{count1}}</button><br><br>
    <button @click="increment"> Click 2 com metodo || {{count2}}</button><br><br>
    <button @click="increment2(2,$event)"> Click 3 com metodos e parametro passada || {{count3}}</button><br><br><br>

    <input type="text" @input="text = $event">
    {{text}}
    <listItem/>
  </div>
</template>

<script> 
import ListItem from './ListItem.vue';

export default {
  name: 'App',
  components: {
    ListItem,
  },
  data(){
    return{
     text:'',
     count1:0,
     count2:0,
     count3:0,
    }
  },
  methods:{
    increment(){
     this.count2++;
    },
    increment2(quantidade,event){
     alert(event);
      this.count3+=quantidade;
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
