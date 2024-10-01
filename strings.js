const str = 'Hello World !'


console.log(str)


function splited(string) {
  const splitArr = string.split('')
  let resultArr = []
  console.log(splitArr)
  for (let i = 0; i < splitArr.length; i += 1) {
    const char = splitArr[i];
     
    if (char !== '!') {
      resultArr.push(char)
    }
  }
  resultArr.splice(resultArr.length - 1, 1);
  console.log('DONE >', resultArr)
  return resultArr
}

splited(str)

// 1. На вход дается строка, необходимо вернуть массив строк. input: 'Hello World' output: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', ' ', '!']
const str1 = 'Hello World !'

function splited1(string) {
  return string.split('')
}

console.log(splited1(str1))

// 2. На вход дается строка, необходимо вернуть массив строк в обратном направлении относительно данной строки
// input: 'Hello World' output: ['!', ' ', 'd', 'l', 'r', 'o', 'W', ' ', 'o', 'l', 'l', 'e', 'H']
const str2 = 'Hello World !'

function splited2(string) {
  const newArray = []
  for (let i = string.length - 1; i >= 0; i--) {
    newArray.push(string[i])
  }
  return newArray
}

console.log(splited2(str2))

// 3. На вход дается строка и символ (буква), необходимо вернуть количество повторений этого символа в данной строке

// input: 'Hello World', 'l' output: 3
// input: 'Hello World', 'H' output: 1

const str3 = 'Hello World !'
const char3 = 'H'

function splited3(string, char) {
  let count = 0
  const newArray = string.split('')
  for(let i = 0; newArray.length > i; i += 1 ) {
    if (newArray[i] === char) {
      count++
    }
  }
  return count
}

console.log(splited3(str3,char3))

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.
//«A», «E», «I», «O», «U», «Y»
