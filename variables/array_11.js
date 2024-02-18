// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, начинающихся с заглавной буквы.

// const initialArray = ['Say', 'hello', 'to', 'World']
// const result = uppercaseOnly(initialArray) // Реализовать эту функцию
// console.log(result) // ['S', 'W']

const initialArray = ['Say', 'hello', 'to', 'World']

const uppercaseOnly = initialArray.reduce(function (acc, item) {
  if (item[0] == item[0].toUpperCase())
    acc.push(item[0])
  return acc
}, [])
console.log(uppercaseOnly)
