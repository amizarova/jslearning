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

 const yourAge = +prompt("Сколько тебе лет сейчас?") //с помощью унарного оператора + ответ преобразуется в числовое значение
//switch case -- альтернатива if else, последовательно проверяет кейсы
 switch (yourAge) {
    case 0: {
        console.log('Не бывает такого возраста')
        break
    }
    case 18: {
        console.log('Не верю, покажи паспорт')
        break
    }
    case 1000: {
        console.log('Ты вампир, что ли?')
        break
    }
}
//если хотим проверить какой-то диапазон, а не конкретное число, то добавляем true
switch (true) {
    case yourAge >= 18: {
        console.log('Супер!')
        break
    }    
    case yourAge < 18: {
        console.log('Дрступ запрещен')
        break
    }
}
//ЦИКЛЫ, цикл while -- пока истинно делай
let count1 = 0
while (count1 < 10) {
    console.log(count1)
    count1++
}

//цикл do while -- делай пока истинно
let count2 = 100
do {
    console.log(count2)
    count2++
} while (count2 < 10)

//цикл for
for (let i=0; i < 4; i++) {
    alert(i)
}

//создание собственных функций, function declaration
function logHello() {
    console.log('Привет')
    console.log('Пока')
}
logHello()
// return -- возврат значения из функции
function sum(a,b) {
    return a + b
}
const resultSum = sum(100, 1)
console.log(resultSum)

function getAgeType(age) {
    if (typeof age !== 'number') {
        return 'Возраст указан некорректно'
    }
    if (age < 0 || age > 110) {
        return 'Такого возраста не может быть'
    }
    if (age <18) {
        return 'Несовершеннолетний'
    }
    return 'Взрослый'
}
console.log(getAgeType(555))

//область видимости переменных -- то что в находится в фигурных скобках видит все что находится снаружи
//к сущностям которые находятся в локальной обл видимости нельзя обратиться снаружи

//функция при вызове может принимать данные которые потом будут использоваться в теле функции()
function logMessage(message, count) {
    for (let i = 0; i < count; i++) {
        console.log(message)
    }
}
logMessage('Привет', 3)

//данные которые мы пишем в () в функции -- локальные переменные которые мы неявно обявили в момент вызова функции
// можно писать в формате function A(message = 'meow', count = 1)
//function declaration можно перезаписать

//function expression, если такая функция записана через const ее нельзя переопределить, через let можно
const longHello = function() {
    console.log('ПРИВЕЕЕТ')
}
longHello()
// стрелочные функции, arrow function
const loggHello = () => {
    console.log('Hello')
}
loggHello()
//особенность стрелочной функции -- неявный возврат
const summ = (a,b) => a + b
console.log(sum(1,2))

 //объекты -- набор свойств, пара ключ-значение; ссылочный тип данных
 //объекты некоторые содержат в себе функциюб такие функции называются методами
 const firstEmtyObject = {}
 const secondEmptyObject = new Object()

 const user = {
    login: 'iamsuperhero',
    password: 'qwerty',
    'registration date' : '01.01.2024',
    sayHi: () => console.log('Привет!!!')
 }
 console.log(user.login)
 console.log(user['registration date'])
 user.sayHi()

 const user1 = {}
 user1.name = 'Амелия'
 user1['is student'] = true
 console.log(user1)
 user1.name = 'Ами'
 console.log(user1)
 delete user1.name
 delete user1['is student']

 const name2 = 'Amelie'
 const age2 = 20
 const user2 = {
    name2,
    age2,
 }
 console.log(user2)
 console.log('is developer' in user2)
 console.log(user.isDeveloper !== undefined)
 for (const key in user2) {
    console.log(key)
    console.log(user[key])
 }

 const propName = prompt('Свойство с каким именем добавить в объект?')
 const propValue = prompt(`Какое значение записать в свойство ${propName}`)
 const obj = {
    [propName]: propValue,
 }
console.log(obj)

const nums = {
    2: 'Второй',
    1: 'Первый',
    3: 'Третий'
}
for (const num in nums) {
    console.log(nums[num])
}

//ключевое слово this -- позволяет получить доступ к контексту выполнения
console.log('this глобальный:', this)
function fn() {
    console.log('this в теле функции:', this)
}
fn()

const user3 = {
    name3: 'Amelie',
    age3: 20,
    logThis: function() {
        console.log('this в теле метода объекта user:', this)
    } ,
    address: {
        city: 'Krakow',
        zipcode: 12345678,
        logInnerThis: function () {
            console.log('this в теле метода объекта adress:', this)
        } ,
    }
}
user.logThis()
user.address.logInnerThis()

const admin1 = {name: 'Vlad'}
const admin2 = {name: 'Vasya'}
function logInfo () {
    console.log('this:', this)
    console.log('this name', this.name)
}
logInfo()
admin1.logName = logInfo
admin2.logName = logInfo
admin1.logName()
admin2.logName()

const calculator = {
    read() {
        this.a = Number(prompt('Введите первое число:', 0))
        this.b = Number(prompt('Введите второе число:', 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}
calculator.read()
console.log('Сумма =', calculator.sum())
console.log('Произведение =', calculator.mul())

//методы примитивов и чисел
//toFixed -- округляет число до указанного количества знаков после запятой
const price = 99.99
const roundedPrice = price.toFixed(0)
console.log('Округленная цена:', roundedPrice)
console.log(99.99.toFixed(2))
console.log(100..toFixed(2))
//toPrecision -- округляет максимальноб не оставляет знаков
const num1 = 100.055
console.log(num1.toPrecision(4))
//toString -- приводит к строчному типу
const num2 = 100
const numAsString = num.toString()
console.log('Число:', num)
console.log('Число в виде строки:', numAsString)
 //Math -- встроенный объект JS
 console.log(Math)
 console.log('Случайное число:', Math.random()) //всегда дробное 
 console.log(Math.pow(2,10)) //приведение в степень
 console.log(Math.sqrt(16)) //квадратный корень
 console.log(Math.cbrt(9)) //кубический корень
 console.log(Math.round(3.55))//округляет до ближайшего целого
 console.log(Math.floor(5.66))// округляет вниз до ближайшего целого
 console.log(Math.ceil(7.88))//округляет вверх до ближайшего целого
 console.log(Math.trunc(3.49))//округляет до ближайшего целого положительного

 //парсинг, parseInt
 const numberAsString1 = '100px'
 console.log(parseInt(numberAsString1))
 //parseFloat
 const numberAsString2 = '100.50px'
 console.log(parseFloat(numberAsString2))


 //Строки в JS и их методы, 14 урок ЭТИ МЕТОДЫ НЕ МУТИРУЮТ ИСХОДНУЮ СТРОКУ, НЕ МЕНЯЮТ ЕЕ
 let byebye = 'Goodbye'
 let lengthByebye = byebye.length //length -- свойство, а не метод, позволяет получить длину строки

 //получение конкретного символа в строке по индексу
 console.log(byebye[0])
 console.log(byebye[byebye.length - 1])
 console.log(byebye.at(0))
 console.log(byebye.at(-1))

 //приведение в нижний и в верхний регистр
 let boring = 'КаКОЙтО тЕКСТ'
 console.log(boring.toLowerCase())
 console.log(boring.toUpperCase())

 //избавление от пробелов в начале и в конце строки, пробелы между словами вырезаться не будут
 let blank = '      Hello         '
 console.log(blank.length)
 console.log(blank.trim())

//поиск в строке по индексу
console.log(blank.indexOf('H'))
console.log(blank.indexOf('hfhfjfkgkgkg')) //получим -1 в консоли потому что такой строки/символа нет

//поиск в строке -- includes
let stroka = 'Привет, меня зовут Амелия'
console.log(stroka.includes('Амелия')) //вернет true

//получение подстроки из строки
console.log(stroka.substring(0,6))

//ПОВТОРЕНИЕ СТРОКИ УКАЗАННОЕ КОЛИЧЕСТВО РАЗ
let snovaStroka = 'Amelia'
console.log(snovaStroka.repeat(3)) //'AmeliaAmelia'

//замена части строки
console.log(snovaStroka.replace('Amelia', 'Maria'))//меняем Amelia на Maria

let iSnovaStroka = 'Я хочу поменять не одну часть строки, а каждую часть'
console.log(iSnovaStroka.replaceAll('часть', 'блаблабла')) // меняет все вхождения
console.log(iSnovaStroka.replace(/часть/g, 'блаблабла'))

//разбивание строки на массив(по указанному разделителю)
console.log(iSnovaStroka.split(',')) //запятая как разделитель
console.log(iSnovaStroka.split('')) // посимвольно
console.log(iSnovaStroka.split(' ')) //по пробелу

//Массивы, приведение к строке -- 15 урок

const array1 = [
    'hello',
    100,
    true,
] //массив -- это обьект
console.log(typeof array1) //object
console.log(array1[0])

array1[0] = 'Привет'
array1[1] = 101
array1[2] = false //изменение элемента массива, содержимым массива можно манипулировать
array1[3] = 0 //добавление элемента в массив

console.log(array1[array1.length - 1]) 
console.log(array1.at(-1))//получение последнего элемента массива

//в массиве может храниться и другой массив, и функция, и обьект

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
] //многомерный массив
console.log(matrix[1][0]) //будет выведено 4

const letters1 = ['C', 'D']
letters1.push('E', 'F') //добавление элемента в КОНЕЦ массива
letters1.unshift('A', 'B')//добавление элемента в НАЧАЛО массива

letters1.pop() //удаление элемента с конца массива И ВОЗВРАЩАЕТ УДАЛЕННЫЙ ЭЛЕМЕНТ
letters1.shift() //удаление элемента с начала массива И ВОЗВРАЩАЕТ УДАЛЕННЫЙ ЭЛЕМЕНТ

//преобразование массива в строку
console.log(letters1.toString()) // через запятую, не всегда удобно
console.log(letters1.join('')) //без разделителей

//копирование массивов
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1]

//обединение массивов
const totalArr = [...arr1, ...arr2]
const totalArr1 = arr1.concat(arr2)

//массивы нельзя сравнивать напрямую, только перебрать по индексам и сравнить
const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        const value1 = arr1[i]
        const value2 = arr2[i]
        if (value1 !== value2) {
            return false
        }
    }
    return true
}
console.log(areArraysEqual(arr1, arr2))















 











