// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по убыванию возраста.
// const initialArray = [
// 	{ "name": "Viktor", "age": 24 },
// 	{ "name": "Aboba", "age": 16 },
// 	{ "name": "Abiba", "age": 35 },
// ]
// const result = sortByAge() // Реализовать эту функцию
// console.log(result) // [{ "name": "Abiba", "age": 35 }, { "name": "Viktor", "age": 24 }, { "name": "Aboba", "age": 16 },]

const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function sortByAge(arr) {
  const sort = arr.toSorted((a, b) => b.age - a.age)
  return sort 
}

const result = sortByAge(initialArray)
console.log(result)
