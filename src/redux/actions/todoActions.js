
export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_ORDER = 'CHANGE_ORDER'


export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const doneTodo = (todo) => ({
  type: DONE_TODO,
  payload: todo
})

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: todo
})

export const changeOrder = (todo) => ({
  type: CHANGE_ORDER,
  payload: todo
})