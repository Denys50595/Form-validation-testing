const MaxLengthValidator = require('./max-length-validator.js').MaxLengthValidator;


test('should fail if value > max-length', () => {
	const validator = new MaxLengthValidator(6);
	expect(validator.validate('aaaaaaa')).toBe(false);
});

test('should pass if value < max-length', () => {
	const validator = new MaxLengthValidator(6);
	expect(validator.validate('aaa')).toBe(true);
});