const Validator = require('./validator.js').Validator;

function MaxValidator() {

}

MaxValidator.prototype = Object.create(Validator.prototype);
MaxValidator.prototype.constructor = MaxValidator;
MaxValidator.prototype.validate = function(value, max) {
	return parseInt(value) > max || isNaN(parseInt(value));
}

module.exports = {
	MaxValidator: MaxValidator
}