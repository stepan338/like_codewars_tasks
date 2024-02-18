// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, умноженных на два.

// const initialArray = [1, 2, 3, 4]
// const result = multiplyByTwo(initialArray)
// console.log(result) // [2, 4, 6, 8]

const initialArray = [1, 2, 3, 4]

const multiplyByTwo = initialArray.map ((item) => item * 2)
console.log(multiplyByTwo)