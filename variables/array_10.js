// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из уникальных элементов.

// const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]
// const result = uniqueOnly(initialArray) // Реализовать эту функцию
// console.log(result) // [3, 5, 6, 9]

const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]

function uniqueOnly(arr) {
  let dublicateArr = arr.filter((item, index) => (arr.indexOf(item) !== index));
  let uniqueArr = arr.filter(item => !dublicateArr.includes(item));
  return uniqueArr.sort((a, b) => a - b);
}

const result = uniqueOnly(initialArray);
console.log(result);
