const Validator = require('./validator.js').Validator;

function MinValidator(min) {
	this.min = min;
}

MinValidator.prototype = Object.create(Validator.prototype);
MinValidator.prototype.constructor = MinValidator;
MinValidator.prototype.validate = function(value) {
	return parseInt(value) > this.min || isNaN(parseInt(value));
}

module.exports = {
	MinValidator: MinValidator
}