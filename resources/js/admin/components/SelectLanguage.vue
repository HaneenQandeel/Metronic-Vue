<template>
    <div class="locale-changer">
    
        <ul v-model="$i18n.locale">
          <li v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="changeItem($event)">{{lang}}</li>
        </ul>
  </div>
</template>



<script>
export default {
  data () {
    return { langs: ['en', 'ar'] }
  },
  computed :{
      changeItem :function (event){
         alert('hhhhhhhhhhhh')
      }
  }
}
</script>

<style>
.locale-changer select{
    border-color: #716aca;
    color: #04040a;
    height: 25px;
    width: 50px;
}

</style>
