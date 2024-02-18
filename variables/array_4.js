// Напишите функцию, которая принимает два массива чисел и возвращает новый массив, состоящий из элементов, которые есть в обоих массивах.
// Тут есть много решений, предоставьте как минимум 3 разных.
// const initialArray1 = [1, 2, 3]
// const initialArray2 = [4, 5, 6]
// const result = combine(initialArray1, initialArray2) // Реализовать эту функцию
// console.log(result) // [1, 2, 3, 4, 5, 6]

const initialArray4 = ['Say', 'hello', 'to', 'world', 'javascript', 'students']
const initialArray3 = [
  { "name": "Viktor", "age": 24 },
  { "name": "Aboba", "age": 16 },
  { "name": "Bob", "age": 34 },
]
const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]


//.concat
const resultConcat = initialArray1.concat( initialArray2)
console.log(resultConcat)


//.spread
const resultsSpread = [...initialArray1, ...initialArray2, ...initialArray3, ...initialArray4]
console.log(resultsSpread)


//.map and .push - меняет исходный массив
function combine(array1,array2){
  array2.map(item => array1.push(item))
  return array1
}
console.log(combine(initialArray1, initialArray2))
