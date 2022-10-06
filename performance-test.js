const iteration = 1000000

const test = (callback) => {
    for (let i = 0; i < iteration; i++) {
        callback()
    }
}
exports.performance_test = (myCallback, lodashCallback) => {
    const myTime = Date.now()
    test(myCallback);
    const myCalc = Math.round(iteration / (Date.now() - myTime))
    console.log(`My result is ${myCalc} (iteration/time) - time: ${Date.now() - myTime}(ms)`)


    const lodashTime = Date.now()
    test(lodashCallback);
    const lodashCalc = Math.round(iteration / (Date.now() - lodashTime))
    console.log(`Lodash result is ${lodashCalc} (iteration/time)  - time: ${Date.now() - lodashTime}(ms)`)


    if (lodashCalc > myCalc) {
        const result = Math.ceil(lodashCalc * 100 / myCalc - 100)
        console.log(`Lodash is faster on ${result}%`)
    }

    if (myCalc > lodashCalc) {
        const result = Math.ceil(myCalc * 100 / lodashCalc - 100)
        console.log(`My algorithm is faster on ${result}%`)
    }

    if (myCalc === lodashCalc) {
        console.log('There are both super fast')
    }

}
