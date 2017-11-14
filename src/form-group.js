console.clear();
function Validator() {

}

Validator.prototype.validate = function(value) {
	return true;	
}


function RequiredValidator() {

}

RequiredValidator.prototype = Object.create(Validator.prototype);
RequiredValidator.prototype.constructor = RequiredValidator;
RequiredValidator.prototype.validate = function(value) {
	return value != null;
}

function EmailValidator() {

}

EmailValidator.prototype = Object.create(Validator.prototype);
EmailValidator.prototype.constructor = EmailValidator;
EmailValidator.prototype.validate = function(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function NumberValidator() {

}

NumberValidator.prototype = Object.create(Validator.prototype);
NumberValidator.prototype.constructor = NumberValidator;
NumberValidator.prototype.validate = function(value) {
	return !isNaN(parseFloat(value) && isFinite(value));
}


function ValidationError(payload) {
	this.type = payload.type;
	this.message = payload.message;
}

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.emit = function(event, data) {
  if (Array.isArray(this.events[event]) && this.events[event].length > 0) {
      this.events[event].forEach(callback => callback(data));
    }
}

EventEmitter.prototype.on = function(event, callback) {
  if (!Array.isArray(this.events[event])) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this;
}

function FormControl(inputId, validators) {
	this.control = document.getElementById(inputId);
	this.isValid = true;
	this.value = null;
	this.validators = [].slice.call(validators);
	this.errors = [];
	this.events = new EventEmitter();

	if(this.control.form = null) {
		throw new Error('FormControl should have a parent form');
	}

	this.control.addEventListener('change', (event) => {
		this.errors = this.validate(event.target.value);
		this.isValid = this.errors.length > 0;
		this.value = event.target.value;
		this.events.emit('change', this.errors);
	});
}
    FormControl.prototype.mapValidationError = function(validator) {
      switch(true) {
        case validator instanceof EmailValidator: return {type: 'email', message: 'Please enter a valid email address'};
        case validator instanceof NumberValidator: return {type: 'number', message: ''};
        case validator instanceof RequiredValidator: return {type: 'require', message: ''};
        case validator instanceof MaxLengthValidator: return {type: 'max-length', message: ''};
		case validator instanceof MaxValidator: return {type: 'max', message: ''};
		case validator instanceof MinLengthValidator: return {type: 'min-length', message: ''};
		case validator instanceof MinValidator: return {type: 'min', message: ''};
        case validator instanceof PatternValidator: return {type: 'pattern', message: ''};
		}
    }
    
	FormControl.prototype.validate = function(value) {
		return this.validators.map(validator => {
			if(validator.validate(value)) {
				return null;
			} else {
				const errorPayLoad = this.mapValidationError(validator);
				return new ValidationError(errorPayLoad);
			}
		})
		.filter(error => error != null);	
	}

const control = new FormControl('main', [ new EmailValidator(), new NumberValidator(), new RequiredValidator() ]);

control.events.on('change', data => console.log(data));




