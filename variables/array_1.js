// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из четных чисел.
// const initialArray = [1, 2, 3, 4, 5, 6, 7, 8]
// const result = evenNumbersOnly(initialArray) // Реализовать эту функцию
// console.log(result) // Выводит [2, 4, 6, 8]

const car = {
  color: "silver",
  wheels: 4,
  engine: {
    cylinders: 3,
    size: 1.2,
  },
};
const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 'dasd', car, arr];


//.filter
const isEvenNumbersOnly = initialArray.filter((num) => num % 2 == 0);
console.log(isEvenNumbersOnly);


//.forEach and .push
function forEachEvenNumbersOnly (even) {
  const evenArr = [];
  even.forEach(item => {
    if (item % 2 == 0) {evenArr.push(item)}
  });
  return(evenArr);
};
const result = forEachEvenNumbersOnly(initialArray);
console.log(result);
