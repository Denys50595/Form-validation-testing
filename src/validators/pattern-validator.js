const Validator = require('./validator.js').Validator;

function PatternValidator() {

}

PatternValidator.prototype = Object.create(Validator.prototype);
PatternValidator.prototype.constructor = PatternValidator;
PatternValidator.prototype.validate = function(value, regex) {
	var patternRegExp = new RegExp(regex, "");
	return patternRegExp.test(value);
}

module.exports = {
	PatternValidator: PatternValidator
}