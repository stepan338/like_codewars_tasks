// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// const initialArray = [1, 2, 3, 4, 5]
// const result = sum(initialArray) // Реализовать эту функцию
// console.log(result) // 15

const initialArray = [1, 2, 3, 4, 5]

const sum = initialArray.reduce ((acc, item) => acc + item)
console.log(sum) // 15
