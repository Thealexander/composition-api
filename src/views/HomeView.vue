<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3> Ironman : {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    const ironman = ref({name:'Tony', age:50})
    const hulk = reactive({name:'Bruce', age:50})// reactive solo funciona con objetos

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = ()=>{
      hulkIsAlive.value = !hulk.value
      //ironmanIsAlive = reactive(!ironmanIsAlive)// no funcionara
    }

    return {
      ironman, hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIronman:()=>{
        ironman.value.name = 'Tony Stark'
        ironman.value.age = '55'
      },
      changeHulk:() =>{
        hulk.name ='Bruce  Banner'
        hulk.age = 45
      }

    }
  }
}
</script>
