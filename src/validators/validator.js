function Validator () {

}

Validator.prototype.validate = function(value){
	return true;	
}

module.exports = {
	Validator: Validator
}