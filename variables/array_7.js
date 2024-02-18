// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по возрастанию возраста.
// const initialArray = [
// 	{ "name": "Viktor", "age": 24 },
// 	{ "name": "Aboba", "age": 16 },
// 	{ "name": "Abiba", "age": 35 },
// ]
// const result = sortByAge() // Реализовать эту функцию
// console.log(result) // [{ "name": "Aboba", "age": 16 }, { "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 },]

const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function sortByAge(arr) {
  const sort = arr.toSorted((a, b) => a.age - b.age)
  return sort 
}
const result = sortByAge(initialArray)
console.log(result)
