const Validator = require('./validator.js').Validator;

function MinValidator() {

}

MinValidator.prototype = Object.create(Validator.prototype);
MinValidator.prototype.constructor = MinValidator;
MinValidator.prototype.validate = function(value, min) {
	return parseInt(value) < min || isNaN(parseInt(value));
}

module.exports = {
	MinValidator: MinValidator
}