const NumberValidator = require('./number-validator.js').NumberValidator;

test('should fail with any character', () => {
	const validator  = new NumberValidator();
	expect(validator.validate('asaada134sds')).toBe(false);
});

test('should pass with any positive number', () => {
	const validator = new NumberValidator();
	expect(validator.validate('233537')).toBe(true);
});

test('should pass witn any negative number', () => {
	const validator = new NumberValidator();
	expect(validator.validate('-123')).toBe(true);
});

test('should pass with any real nubmer', () => {
	const validator = new NumberValidator();
	expect(validator.validate('123.567')).toBe(true);
});