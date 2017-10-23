const Validator = require('./validator.js').Validator;

function MaxValidator(max) {
	this.max = max;
}

MaxValidator.prototype = Object.create(Validator.prototype);
MaxValidator.prototype.constructor = MaxValidator;
MaxValidator.prototype.validate = function(value) {
	return parseInt(value) < this.max || isNaN(parseInt(value));
}

module.exports = {
	MaxValidator: MaxValidator
}