const FormControl = require('./form-control.js').FormControl;
/*
	@class ValidationError {
		@prop type string
		@prop message string
	}
*/

function ValidationError(type, message) {
	this.type = type;
	this.message = message;
}



module.exports = {
	ValidationError: ValidationError;
}