const Validator = require('./validator.js').Validator;

function MaxLengthValidator(maxLength) {
	this.maxLength = maxLength;
}

MaxLengthValidator.prototype = Object.create(Validator.prototype);
MaxLengthValidator.prototype.constructor = MaxLengthValidator;
MaxLengthValidator.prototype.validate = function(value) {
	return value.length < this.maxLength;
}

module.exports = {
	MaxLengthValidator: MaxLengthValidator
}