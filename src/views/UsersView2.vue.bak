<template>
  <h3 v-if="isLoading">un momento..por favor...</h3>
  <h2 v-else>Lista de Usuarios</h2>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>

  <div v-if="users.length > 0">
    <u>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        |
        <h6>{{ email }}</h6>
      </li>
    </u>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{currentPage}}</span>
</template>

<script>
import useUser from '@/composables/useUser'

export default {
  setup() {
    
    const {
    currentPage,
    errorMessage,
    isLoading,
    nextPage,
    prevPage,
    users,
    } = useUser()

    return {
    currentPage,
    errorMessage,
    isLoading,
    nextPage,
    prevPage,
    users,
    ...useUser() // de esta manera se utiliza todo lo que se desestructura del composable, esta es otra manera pero por cuesiotnes de mixins.. mejor no usar
    
  
    }

  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
}
ul {
  width: 250px;
}
</style>