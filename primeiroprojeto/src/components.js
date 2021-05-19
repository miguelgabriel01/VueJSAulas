import Vue from 'vue';

Vue.component('ButtonString',{
  template:'<button @click="click">Click ButtonString Vue {{count}} -- times</button>',
  data(){
    return{
      count:0,
    };
  },
  methods:{
    click(){
      this.count++;
    },
  },

});
