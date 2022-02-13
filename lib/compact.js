const { performance_test } = require('../performance-test')
const _ = require('lodash');

const compact = (arr) => {
    if (arr == null) {
        return []
    }
    return arr.filter((item) => {
        if (item) {
            return item
        }
    })
}


const params = [0, 1, false, 2, '', 3]
performance_test(() => compact(params), () => _.compact(params))
