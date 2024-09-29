//на вход дан массив чисел, необходимо найти первое четное число и вывести его в консоль

const numbers = [1, 3, 7, 12, 9, 11]

function num(param) {
    for(let i = 0; param.length > i; i += 1 ) {
        if (param[i] % 2 === 0) {
          return param[i]
        }
    }

}
console.log(num(numbers))

//на вход дан массив чисел, необходимо посчитать сумму всех чисел в массиве и вернуть сумму
const numbers1 = [3, 6, 8, -3, 1, 6, 9]

function num1(param1) {
  let sum = 0
    for(let i = 0; param1.length > i; i += 1 ) {
        sum += param1[i]
    }
    return sum

}
console.log(num1(numbers1))


//сделать так чтобы часть с остатком делились а потом без остатка

const numbers2 = [5, 6, 9, 12, 7, 11, 1, 8, 11, 2]

function num2(param2) {
    for(let i = 0; param2.length > i; i += 1 ) {
       if ((param2[i] % 2) === 0) {
         console.log(`Делится на 2 без остатка:`, param2[i])
       } else {
        console.log(`Делится на 2 с остатком:`, param2[i])
       }
      }
    }

console.log(num2(numbers2))
//на вход дан массив чисел и делимое, необходимо вывести первое число которое делится без остатка
const numbers3 = [2, 5, 7, 11, 23, 9, 20, 18, 1, 0, 21]
const  divisible = 3

function num3(param3) {
    for(let i = 0; param3.length > i; i += 1 ) {
        if (param3[i] % divisible === 0) {
          return param3[i]
          break
        }
    }

}
console.log(`Первое число которое делится без остатка на 3: ${num3(numbers3)}`)


//на вход дан массив чисел, необходимо найти в нем первое четное число и возвести в третью степень и вернуть его
const numbers4 = [7, 9, 61, 1, 13, 5, 2, 11, 4, 8, 15, 23]

function num4(param4) {
    for(let i = 0; param4.length > i; i += 1 ) {
        if (param4[i] % 2 === 0) {
          return param4[i] ** 3
          break
        }
    }

}
console.log(`Первое четное число возведенное в третью степень: ${num4(numbers4)}`)
console.log(`Первое четное число возведенное в третью степень: ${num4(numbers4)}`)


