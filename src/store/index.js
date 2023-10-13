import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Probando esta linea numero 1', completed: false },
      { id: '2', text: 'Probando esta linea numero 2', completed: true },
      { id: '3', text: 'Probando esta linea numero 3', completed: false },
      { id: '4', text: 'Probando esta linea numero 4', completed: true },
      { id: '5', text: 'Probando esta linea numero 5', completed: false },


    ]
  },
  mutations:{
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo(state, text =''){
        if(text.length <= 1 ) return
        
      state.todos.push({
        id:uuidv4(),
        completed:false,
        text
      })

    }
  },
  actions:{},
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed
      )
    },
    allTodos: (state, getters, rootState) => {
      return state.todos
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter(todo => todo.completed)
    },
    // usar "_" indica que se usara de manera obligatoria el componente pero que no se utiliza en este caso es state
    getTodosbyTab: ( _ , getters) => (tab)=> {

        switch (tab) {
          case 'all': return getters.allTodos
          case 'pending': return getters.pendingTodos
          case 'completed': return getters.completedTodos
        }
     }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
