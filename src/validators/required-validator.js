const Validator = require('./validator.js').Validator;

function RequiredValidator() {

}

RequiredValidator.prototype = Object.create(Validator.prototype);
RequiredValidator.prototype.constructor = RequiredValidator;
RequiredValidator.prototype.validate = function(value) {
	return value != null;
}

module.exports = {
	RequiredValidator: RequiredValidator
}