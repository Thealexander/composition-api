<template>
  <h3 v-if="isLoading">un momento..por favor...</h3>
  <h2 v-else>Lista de Usuarios</h2>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>

  <div v-if="users.length > 0">
    <user-list
    :users="users"
    v-slot="{user}">
    <h5>{{ user.first_name }} {{ user.last_name }}</h5>
    <span>{{ user.email }}</span>
  </user-list>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUser from '@/composables/useUser'
import UserList from '@/components/UserList.vue';

export default {
  components:{UserList},
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