const testCase = require("../test_lib/test_case");
const lodashConcat = require("lodash/concat");
const { performance_test } = require('../performance-test')

const concat = (array, ...args) => { 
    if(!array) return [];

    const newArr = Array.isArray(array) ? [...array] : [array];

    args.forEach((item) => {
        if(Array.isArray(item)){
            item.forEach((item) => {
                newArr.push(item)
            })
        } else {
            newArr.push(item)
        }
    })

    return newArr;
}

performance_test(() => concat([1], 2, [3], [[4]]), () => lodashConcat([1], 2, [3], [[4]]))

testCase({
    expected: [ 1, 2, 3, [ 4 ] ],
    func: concat,
    args: [[1], 2, [3], [[4]]],
})

testCase({
    expected: [ 1 ],
    func: concat,
    args: [[1]],
})

testCase({
    expected: [ 1 ],
    func: concat,
    args: [ 1 ],
})

testCase({
    expected: [],
    func: concat,
    args: [],
})
