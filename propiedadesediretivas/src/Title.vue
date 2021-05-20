<template>
<div>
<h1>{{ titulo }}</h1>
<h1>{{ subtitulo }}</h1>
</div>
</template>

<script>
export default {
   name:'Title',
   props:{
     titulo:{
       type:String,
       required:true,
     },
     subtitulo:{
       type:String,
       required:false,
       default:"SubTitulo"
     },
     tipo:{
       type:Number,
       validator(value){
         return [1,2,3].includes(value);
       }
     }
   },
}
</script>