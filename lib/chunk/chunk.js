const { performance_test } = require('../../performance-test')
const _ = require('lodash');

const chunk = (array, number) => {
    const arr = [...array]
    let newArray = []

    if (number < 1) {
        return null
    }
    const range = Math.ceil((arr.length) / number)
    for (let i = 0; i < range; i++) {
        newArray.push(arr.splice(0, number))
    }
    return newArray
}

const params = [[1, 2, 3, 4, 5], 2]
performance_test(() => chunk(...params), () => _.chunk(...params))

