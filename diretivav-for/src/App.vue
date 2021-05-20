<template>
  <div id="app">
    <h1>Diretivas v-for</h1>
<div style="display:none">
          <p>com array</p>
    <ul>
      <li v-for="(item,index) in todos" :key="index">
        {{item}}
      </li>
    </ul>
    </div>
<div style="display:none">
      <p>com objetos</p>
        <ul>
      <li v-for="(item2,chave,index) in todos2" :key="index">
        {{chave}}:{{item2}}-{{index}}
      </li>
    </ul>
</div>

<div style="display:none">
      <p>Com Strings</p>
        <ul>
      <li v-for="(char,index) in todos3" :key="index">
        {{char}} - {{index}}
      </li>
    </ul>
</div>

    <p>Uso com v-if</p>
    <ul>
      <li v-for="(todo,index) in filterTodos" :key="index">
       {{ todo }}
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
      },
      todos3:'Hello blá,blá,blá..',
      valueCondi: [
      {label:'Todo 1', iscompleted: true},
      {label:'Todo 3', iscompleted: true},
      {label:'Todo 4', iscompleted: false},
      {label:'Todo 4', iscompleted: false},
    ]
    };

  },
  //validação para só exibir de acordo com uma condição
  computed:{
    filterTodos(){
      return this.valueCondi.filter(valueCondi => !valueCondi.iscompleted)
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
