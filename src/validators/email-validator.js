const Validator = require('./validator.js').Validator;

function EmailValidator() {

}

EmailValidator.prototype = Object.create(Validator.prototype);
EmailValidator.prototype.constructor = EmailValidator;
EmailValidator.prototype.validate = function(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

module.exports = {
	EmailValidator: EmailValidator
}