// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, которые меньше среднего значения всех элементов массива.

// const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]
// const result = lessThanAverage() // Реализовать эту функцию
// console.log(result) // [1, 20, 13, 9, 40]


const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function lessThanAverage(arr) {
  return arr.filter((item) => item < arr.reduce((acc, item) => (acc + item)) / arr.length)
}

const result = lessThanAverage(initialArray) // Реализовать эту функцию
console.log(result) // [1, 20, 13, 9, 40]