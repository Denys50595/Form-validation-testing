const MaxValidator = require('./max-validator.js').MaxValidator;

test('should fail if value > max', () => {
	const validator = new MaxValidator(9);
	expect(validator.validate(15)).toBe(false);
});

test('should pass if value < max', () => {
	const validator = new MaxValidator(15);
	expect(validator.validate(5)).toBe(true);
});
