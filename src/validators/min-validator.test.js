const MinValidator = require('./min-validator.js').MinValidator;

test('should pass if value < min', () => {
	const validator = new MinValidator();
	expect(validator.validate(2, 9)).toBe(true);
});

test('should fail if value > min', () => {
	const validator = new MinValidator();
	expect(validator.validate(11,9)).toBe(false);
});