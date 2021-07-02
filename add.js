const createMathOperation = require('./createMathOperation.js');


module.exports.log = (...props) => {
	return createMathOperation.log(props, (a,b)=> a+b)
}






