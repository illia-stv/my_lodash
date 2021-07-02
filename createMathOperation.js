

module.exports.log = (arr, callback) => {
	return arr.filter((item) => typeof item == 'number').reduce(callback, 0)
}