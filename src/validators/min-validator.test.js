const MinValidator = require('./min-validator.js').MinValidator;

test('should fail if value < min', () => {
	const validator = new MinValidator(9);
	expect(validator.validate(2)).toBe(false);
});

test('should pass if value > min', () => {
	const validator = new MinValidator(9);
	expect(validator.validate(11)).toBe(true);
});