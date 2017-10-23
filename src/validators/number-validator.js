const Validator = require('./validator.js').Validator;

function NumberValidator() {

}

NumberValidator.prototype = Object.create(Validator.prototype);
NumberValidator.prototype.constructor = NumberValidator;
NumberValidator.prototype.validate = function(value) {
	return !isNaN(parseFloat(value) && isFinite(value));
}

module.exports = {
	NumberValidator: NumberValidator
}