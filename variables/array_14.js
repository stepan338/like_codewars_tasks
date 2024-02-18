// Напишите функцию, которая принимает два массива чисел и возвращает новый массив, состоящий из элементов первого массива, которых нет во втором массиве.

// const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]
// const result = compare() // Реализовать эту функцию
// console.log(result) // [2, 6]


const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]


function compare(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item))
}

const result = compare(initialArray1, initialArray2) // Реализовать эту функцию
console.log(result) // [2, 6]