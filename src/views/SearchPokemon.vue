<template>
  <h1> Buscar Pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Numero de Pokemon" re="txSearchId"
    v-model="pokemonId"/>
  </form>
  <br>
  <span>Enter para realizar busqueda</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {

setup (){

    const router = useRouter()
    const pokemonId = ref(1)
    const txSearchId = ref()

    onActivated(()=>{
      //txSearchId.value.focus()
      txSearchId.value.select()
    })

    return {
      pokemonId, txSearchId,
      onSubmit: () => {
        console.log('pokemon a buscar', pokemonId.value)
        router.push({name: 'pokemon-view', params:{ id: pokemonId.value}})
      }
    }

}
}
</script>

<style>

</style>