<template>
  <h1>Todo List</h1>
  <h4>Tareas: {{ pending.length}}</h4>
  <hr>
<button :class="{'active': currentTab === 'all'}"
 @click="'all'">Todos</button>
<button :class="{'active': currentTab === 'pending'}"
@click="'pending'">Pendientes</button>
<button :class="{'active': currentTab === 'completed'}"
@click="'completed'">Completados</button>

<div>
  <ul>
    <li v-for="todo in getTodosByTab" :key="todo.id"
    :class="{'completed' : todo.completed }" @dblclick="toggleTodo(todo.is)"
    > {{ todo.text }}</li>
  </ul>
</div>
<button @click="isOpen=true">Crear Todo</button>

<modal v-if="isOpen" @on:close="isOpen= false"> 
<template v-slot:header>
  <h1>Nueva Tarea</h1>

</template>

<template v-slot:body>  
  <form @submit.prevent="createTodo(newTodoText); isOpen=false">
    <input type="text" placeholder="Nueva tarea" v-model="newTodoText">
   <br> <br>
  <button type="submit">Crear</button>
</form>
</template>


</modal>

</template>

<script>
import { ref } from 'vue'
import useTodos from '../composables/useTodo'
import Modal from '@/components/Modal.vue'
 

export default {
// si usa compositionAPI no usar methods dentro del setup
components:{Modal},
setup(){

const {
  currentTab,
  getTodosByTab,
  pending,
  toggleTodo,
createTodo } = useTodos()

  return {
    currentTab,
    getTodosByTab,
    pending,
    toggleTodo,
    createTodo,
  
    isOpen:ref(false),
    newTodoText: ref('')
  } 
},
}
</script>

<style scoped>

div{
  display: flex;
  justify-content: center;
  text-align: center;
}
ul{
  width:300px;
  text-align: left;
}
li{
  cursor: pointer;
}
.active{
  background-color: #2c3e50;
  color: white;
}
.completed{
  text-decoration: line-through;
}
</style>