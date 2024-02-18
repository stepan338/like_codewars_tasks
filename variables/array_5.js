// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, которые повторяются более одного раза.
// const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]
// const result = duplicatesOnly(initialArray) // Реализовать эту функцию
// console.log(result) // [1, 2, 4]

const car = {
  color: "silver",
  wheels: 4,
  engine: {
    cylinders: 3,
    size: 1.2,
  },
};
const num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const initialArray2 = ['Say', 'hello', 'to', 'world', 'javascript', 'students', car, num]
const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1, initialArray2]


const duplicatesOnly = initialArray.filter ( (item, index, arr) => arr.indexOf(item, 1) !== index);
console.log(duplicatesOnly) 
