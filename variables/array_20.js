// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, у которых индекс чётный.

// const initialArray = [19, 1, 3, 4, 5, 6, 20, 8]
// const result = evenIndexOnly(initialArray) // Реализовать эту функцию
// console.log(result) // Выводит [19, 3, 5, 20]

const initialArray = [19, 1, 3, 4, 5, 6, 20, 8]

// .filter
const evenIndexOnly = initialArray.filter((num, index) => index % 2 == 0);
console.log(evenIndexOnly);


// .filetr and .indexOf
const evenIndexOnly2 = initialArray.filter((index) => initialArray.indexOf(index) % 2 == 0);
console.log(evenIndexOnly2);