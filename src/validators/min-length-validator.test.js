const MinLengthValidator = require('./min-length-validator.js').MinLengthValidator;

test('should pass if value < min-length', () => {
	const validator = new MinLengthValidator();
	expect(validator.validate('a', 6)).toBe(true);
});

test('should fail if value > min-length', () => {
	const validator = new MinLengthValidator();
	expect(validator.validate('aaaaaaaaa', 6)).toBe(false);
});