'use strict'

console.log("Привет, это мой файл для самостоятельного изучения JS")

//Однострочный комментарий
/* 
    Многострочный
    комментарий 
    */

let message1 
   message1 = "Привет, это переменная"
   console.log(message1)
   message1 = "Оп, переименовали переменную"
   console.log(message1)
const message2 = "Константа, такие переменные менять нельзя"
   console.log(message2)
const name = "Амелия", age = 20, women = true
   console.log(name, age, women)
   const admin = name
   console.log(admin)
const greeting ='Привет'
    const myMessage =`${greeting}, ${name}`
    console.log(myMessage)
const isChild = age <18
    console.log(isChild)
let data = null
    console.log(data) 
let nothing
    console.log(nothing) //значение не было присвоено
console.log (
    typeof message1
)
console.log (
    typeof isChild
)
console.log (
    typeof 100
)
console.log (
    typeof 9099938388389494003930202n
)
console.log (
    typeof true
)
console.log (
    typeof null
)
console.log (
    typeof [1,2,3,4,5,6,7]
)
const str = '111'
    const num = 222
    const result = num + str
    console.log(result) //преобразование типов данных
    console.log('12'/'6')
    console.log(String(num))
    console.log(Number(str))
    console.log (
        Number(null)
    )
    console.log (
        Number(undefined)
    )
    console.log (
        Number(true)
    )
console.log(2 + 2)
console.log(10 - 8)
console.log(10 / 5)
console.log(10 * 5)
console.log(2 ** 2) //возведение в степень
console.log(13 % 5) //остаток от деления
//это все были бинарные операторы
console.log(-2) //унарный оператор, преобразовывает 2 в -2, в отличии от бинарных операторов пишутся слитно с числом

let count = 10
count += 2
console.log(count)
count -- //оператор декремента
console.log(count)
count ++ //оператор инкремента
console.log(count)

const year = 2024
    if (year === 2024) {
        console.log('Сейчас действительно 2024 год')
    } else if (year === 3000) {
        console.log('Неизвестный год :(')
    } else {
        console.log('Очень неизвестный год :(')
    } //условное ветвление

const myPlan = year === 2024 
    ? 'начинаю учиться' 
    : 'неизвестный год' //тернарный оператор

/* Логические операторы:
    || -- оператор "или", если хоть одно услоловие истинно(или то, или это), то ...
    && -- оператор "и"
    ! -- оператор НЕ, преобразует true в false и наоборот (!true будет false)
    ?? -- оператор нулевого слияния
    */
 const withParent = true
 if (age >= 18 || withParent) {
    console.log('Проходите')
 } else {
    console.log('Вход закрыт для несовершеннолетних')
 }

 const moneyInWallet = 5
 const iceCreamPrice = 2
 const isStoreOpen = true
 if (moneyInWallet >= iceCreamPrice && isStoreOpen) {
    console.log('Оплата прошла успешно')
 } else {
    console.log('Недостаточно средств или магазин закрыт')
 }

 alert('Привет!')
 alert(myMessage)
 alert(1 + 2 + 3) //alert приостанавливает дальнейшее выполнение кода пока всплывающее окошко не будет закрыто

 prompt('Как тебя зовут?')
 const userAge = prompt('Сколько тебе лет?')
 console.log(`Возраст: ${userAge}`)
if (userAge >=18) {
    console.log('Доступ разрешен')
} else {
    console.log('Доступ запрещен')
}

let ifUserReady = confirm('Ты готов?')
 if (ifUserReady) {
    console.log('Супер!')
 } else {
    console.log('Жаль((')
 }

