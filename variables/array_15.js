// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих подстроку "js"

// const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes']
// const result = contains(initialArray) // Реализовать эту функцию
// console.log(result) // ['js', 'awdjsdc']

const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes']

const contains = initialArray.filter((item) => item.includes('js'));
console.log(contains) // ['js', 'awdjsdc']
