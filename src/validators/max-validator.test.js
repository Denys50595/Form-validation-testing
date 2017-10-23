const MaxValidator = require('./max-validator.js').MaxValidator;

test('should pass if value > max', () => {
	const validator = new MaxValidator();
	expect(validator.validate(15, 9)).toBe(true);
});

test('should fail if value < max', () => {
	const validator = new MaxValidator();
	expect(validator.validate(5, 9)).toBe(false);
});
