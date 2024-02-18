// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из первых букв каждой строки.

// const initialArray = ['Say', 'hello', 'to', 'world']
// const result = firstLetters(initialArray) // Реализовать эту функцию
// console.log(result) // ['S', 'h', 't', 'w']

const initialArray = ['Say', 'hello', 'to', 'world']

const firstLetters = initialArray.map ((num) => num[0])
console.log (firstLetters)
