import { ADD_TODO, DONE_TODO, DELETE_TODO, CHANGE_ORDER } from '../actions/todoActions'



const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos'))
  : { todos: [], performed: [], active: 0, done: 0 }


const initialState = {
  todos: todos.todos,
  performed: todos.performed,
  active: todos.active,
  done: todos.done
}

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload, // add last position 
        ],
        active: state.active + 1
      }

    case DONE_TODO:

      const { done, ...res } = action.payload;
      const newItem = {
        ...res,
        done: true
      }
      return {
        ...state,
        done: state.done + 1,
        active: state.active - 1,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id
        }),

        performed: [
          ...state.performed,
          newItem
        ],

      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id
        })
      }

    case CHANGE_ORDER: {
      return {
        ...state,
        todos: action.payload
      }

    }

    default:
      return state
  }
}

export default todo
