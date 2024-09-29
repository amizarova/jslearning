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