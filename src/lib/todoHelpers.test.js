import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

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