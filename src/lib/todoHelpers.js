/**
 * Add new todo
 * 
 * @param {array} list 
 * @param {object} item 
 * @return {array} new list
 */
export const addTodo = (list, item) => list.concat(item)

export const generateId = () => Math.floor(Math.random() * 1000000)

/**
 * Find todo item in the list
 * 
 * @param {number} id single item
 * @param {array} list todo list
 * @return {object} a value in the array that matches the id
 */
export const findById = (id, list) => list.find(item => item.id === id)

/**
 * Update isCompleted value inside the todo and return a new updated todo
 * 
 * @param {object} todo todo item
 * @return {object} updated item
 */
export const toggleTodo = (todo) => ({...todo, isCompleted: !todo.isCompleted})

/**
 * Update a todo inside the todo list/array and return a new updated array
 * 
 * @param {array} list 
 * @param {object} updated 
 * @return {array} new array with updated todo item
 */
export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

export const removeTodo = (list, id)  => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}

export const filterTodos = (list, route) => {
  switch(route) {
    case '/active':
      return list.filter(item => !item.isCompleted)
    case '/complete':
      return list.filter(item => item.isCompleted)
    default:
      return list
  }
}