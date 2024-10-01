const car1 = {
    id: 1,
    mark: 'BMW',
    maxSpeed: 260,
    description: 'nice car',
}

car1.like = 'kek'


const id = 2
const mark = 'Mercedes'
const maxSpeed = 230
const description = 'nice car too :)'

const key1 = id
const key2 = mark
const key3 = maxSpeed
const key4 = description

const car2 = {
    [key1]: id,
    [key2]: mark,
    [key3]: maxSpeed,
    [key4]: description,
}
const keys = ['id', 'title', 'married']
const values = [1, 'Амелия', false]

function buildObj(arr1, arr2) {
    const obj = {}
    for(let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i]
    }
    return obj
}
console.log(buildObj(keys, values))

// На вход подается строка, необходимо вернуть true or false
// Условие: все буквы должны повторится лишь 1 раз

// input: 'Amelia' output: false
// input: 'mega' output: true
