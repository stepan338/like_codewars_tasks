// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, которые больше среднего значения всех элементов массива.

// const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]
// const result = greaterThanAverage() // Реализовать эту функцию
// console.log(result) // [234, 59, 78]

const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function greaterThanAverage(arr) {
  return arr.filter((item) => item > arr.reduce((acc, item) => (acc + item)) / arr.length) 
}

const result = greaterThanAverage(initialArray) // Реализовать эту функцию
console.log(result) // [234, 59, 78]

