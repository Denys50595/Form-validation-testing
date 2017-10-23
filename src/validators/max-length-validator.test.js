const MaxLengthValidator = require('./max-length-validator.js').MaxLengthValidator;


test('should pass if value > max-length', () => {
	const validator = new MaxLengthValidator();
	expect(validator.validate('aaaaaaa', 6)).toBe(true);
});

test('should fail if value < max-length', () => {
	const validator = new MaxLengthValidator();
	expect(validator.validate('aaa', 6)).toBe(false);
});