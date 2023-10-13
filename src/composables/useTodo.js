import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')
   
     // console.log(store)
    return {
      currentTab,
      all: computed(() =>store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos'] ),
  
      getTodosByTab: computed( () => store.getters['getTodosbyTab'](currentTab.value) ),
  
      toggleTodo:(id) =>  store.commit('toogleTodo', id), 
      createTodo:(text) =>  store.commit('createTodo', text) //esto es un method
    }
    

}

export default useTodos