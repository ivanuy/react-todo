import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false}
  ]

  const newTodo = {id: 3, name: 'three', isCompleted: false}
  const expected = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false}
  ]

  const newTodo = {id: 3, name: 'three', isCompleted: false}
  const expected = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false}
  ]
  const expected = {id: 2, name: 'two', isCompleted: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isCompleted prop of a todo', () => {
  const startTodo = {id:2, name: 'two', isCompleted: true}
  const expected = {id:2, name: 'two', isCompleted: false}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
})

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id:2, name: 'two', isCompleted: true}
  const result = toggleTodo(startTodo)
  expect(result).not.toBe(startTodo)
})

test('updateTodo should update an item by id', () => {
  const startTodos = [
    {id:1, name: 'one', isCompleted: false},
    {id:2, name: 'two', isCompleted: true},
    {id:3, name: 'three', isCompleted: true}
  ]
  const updatedTodo = {id:2, name: 'two two', isCompleted: false}
  const expectedTodos = [
    {id:1, name: 'one', isCompleted: false},
    {id:2, name: 'two two', isCompleted: false},
    {id:3, name: 'three', isCompleted: true}
  ]

  const result = updateTodo(startTodos, updatedTodo)
  expect(result).toEqual(expectedTodos)
})

test('updatedTodo should not mutate the original array', () => {
  const startTodos = [
    {id:1, name: 'one', isCompleted: false},
    {id:2, name: 'two', isCompleted: true},
    {id:3, name: 'three', isCompleted: true}
  ]
  const updatedTodo = {id:2, name: 'two two', isCompleted: false}
  const result = updateTodo(startTodos, updatedTodo)
  expect(result).not.toBe(startTodos)
})

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]
  const targetId = 3
  const expectedTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
  ]
  const result = removeTodo(startTodos, targetId)

  expect(result).toEqual(expectedTodos)
})

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]
  const targetId = 3
  const result = removeTodo(startTodos, targetId)

  expect(result).not.toBe(startTodos)
})

test('filterTodos should return all items for the root route', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]

  const result = filterTodos(startTodos, '/')

  expect(result).toEqual(startTodos)
})

test('filterTodos should return only completed items for the complete route', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: true},
    {id: 3, name: 'three', isCompleted: false}
  ]
  const expected = [
    {id: 2, name: 'two', isCompleted: true}
  ]

  const result = filterTodos(startTodos, '/complete')

  expect(result).toEqual(expected)
})

test('filterTodos should return only incomplete items for the active route', () => {
  const startTodos = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 2, name: 'two', isCompleted: true},
    {id: 3, name: 'three', isCompleted: false}
  ]
  const expected = [
    {id: 1, name: 'one', isCompleted: false},
    {id: 3, name: 'three', isCompleted: false}
  ]

  const result = filterTodos(startTodos, '/active')

  expect(result).toEqual(expected)
})