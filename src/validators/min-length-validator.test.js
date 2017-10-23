const MinLengthValidator = require('./min-length-validator.js').MinLengthValidator;

test('should fail if value < min-length', () => {
	const validator = new MinLengthValidator(6);
	expect(validator.validate('a')).toBe(false);
});

test('should pass if value > min-length', () => {
	const validator = new MinLengthValidator(6);
	expect(validator.validate('aaaaaaaaa')).toBe(true);
});