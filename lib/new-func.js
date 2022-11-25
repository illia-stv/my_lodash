const _ = require('lodash');
const { performance_test } = require('../performance-test')

const concat = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i])
    }
    return newArr
}


const difference = (array, ...values) => {
    const concatArr = concat(values)
    return array.filter((item) => {
        if (concatArr.indexOf(item) === -1) {
            return item
        }
    })
}


performance_test(() => difference([1, 2], [2, 3]), () => _.difference([1, 2], [2, 3]))

console.log(_.difference([1, 2], [2, 3, [1]], [[1]]))
