// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, состоящий только из объектов, у которых возраст больше 18 лет.
// const initialArray = [
  // { "name": "Viktor", "age": 24 },
  // { "name": "Aboba", "age": 16 },
// ]
// const result = adultOnly(initialArray) // Реализовать эту функцию
// console.log(result) // Выведет [{ "name": "Viktor", "age": 24 }]

const car = {
  color: "silver",
  wheels: 4,
  engine: {
    cylinders: 3,
    size: 1.2,
  },
};
const initialArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 'dasd', car];
const initialArray3 = ['Say', 'hello', 'to', 'world', 'javascript', 'students', car, initialArray2]
const initialArray = [
  { "name": "Viktor", "age": 24 },
  { "name": "Aboba", "age": 16 },
  { "name": "Bob", "age": 34 },
  initialArray3
]

//.filter
let isAdultOnly3 = initialArray.filter(item => item.age> 18)
console.log(isAdultOnly3);


//.forEach and .push
const evenArr2 = [];
const forEachAdultOnly2 = initialArray.forEach((item) => {if (item.age > 18) {
  evenArr2.push(item);
  return(evenArr2);
}});
console.log (evenArr2)