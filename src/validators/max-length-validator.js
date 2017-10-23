const Validator = require('./validator.js').Validator;

function MaxLengthValidator() {

}

MaxLengthValidator.prototype = Object.create(Validator.prototype);
MaxLengthValidator.prototype.constructor = MaxLengthValidator;
MaxLengthValidator.prototype.validate = function(value, maxLength) {
	return value.length > maxLength;
}

module.exports = {
	MaxLengthValidator: MaxLengthValidator
}