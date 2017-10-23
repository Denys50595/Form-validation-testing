const PatternValidator = require('./pattern-validator.js').PatternValidator;

test('should pass if value is equel', () => {
	const validator = new PatternValidator();
	expect(validator.validate('asasdas1234', 'asasdas1234')).toBe(true);
});

test('should fail if value is not equel', () => {
	const validator = new PatternValidator();
	expect(validator.validate('asasdas1234', 'assasdas')).toBe(false);
});