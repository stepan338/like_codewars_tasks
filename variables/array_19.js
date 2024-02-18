// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих только буквы латинского алфавита.

// const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']
// const result = latinAlphabetOnly(initialArray) // Реализовать эту функцию
// console.log(result) // ['Say', 'to']

const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']


const latinAlphabetOnly = initialArray.filter((item) => item.match(/^[a-z]/i));
console.log(latinAlphabetOnly) // ['Say', 'to']
