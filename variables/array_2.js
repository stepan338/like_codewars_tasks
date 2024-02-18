// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, длина которых больше 5 символов.
// const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students']
// const result = longerThanFive(initialArray) // Реализовать эту функцию
// console.log(result) // Выведет ['javascript', 'students']


const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students']


//.filter
const longerThanFive = initialArray.filter((str) => (str.length > 5));
console.log(longerThanFive);


//.forEach and .push
function forEachLongerThanFive(str) {
  const evenArr = [];
  str.forEach(item => {
    if (item.length > 5) { evenArr.push(item) }
  });
  return (evenArr);
};
const result = forEachLongerThanFive(initialArray);
console.log(result);
