/*
 * @prop errors Array<ValidationError>
*/
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
		this.events.emit('change', this.isValid);
	});
}

FormControl.prototype.mapValidationError = function(validator) {
  switch(true) {
    case validator instanceof EmailValidator: return {type: 'email', message: 'Please enter a valid email address'};
    case validator instanceof MaxLengthValidator: return {type: 'max-length', message: ''};
	case validator instanceof MaxValidator: return {type: 'max', message: ''};
	case validator instanceof MinLengthValidator: return {type: 'min-length', message: ''};
	case validator instanceof MinValidator: return {type: 'min', message: ''};
	case validator instanceof NumberValidator: return {type: 'number', message: ''};
    case validator instanceof PatternValidator: return {type: 'pattern', message: ''};
	case validator instanceof RequiredValidator: return {type: 'require', message: ''};
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


module.exports = {
	FormControl: FormControl
}