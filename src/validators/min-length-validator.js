const Validator = require('./validator.js').Validator;

function MinLengthValidator(minLength) {
	this.minLength = minLength;
}

MinLengthValidator.prototype = Object.create(Validator.prototype);
MinLengthValidator.prototype.constructor = MinLengthValidator;
MinLengthValidator.prototype.validate = function(value) {
	return value.length > this.minLength;
}

module.exports = {
	MinLengthValidator: MinLengthValidator
}