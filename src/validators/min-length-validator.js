const Validator = require('./validator.js').Validator;

function MinLengthValidator() {

}

MinLengthValidator.prototype = Object.create(Validator.prototype);
MinLengthValidator.prototype.constructor = MinLengthValidator;
MinLengthValidator.prototype.validate = function(value, minLength) {
	return value.length < minLength;
}

module.exports = {
	MinLengthValidator: MinLengthValidator
}