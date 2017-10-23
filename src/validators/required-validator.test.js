const RequiredValidator = require('./required-validator.js').RequiredValidator;

test('should pass if value is present', () => {
	const validator = new RequiredValidator();
	expect(validator.validate('@')).toBe(true);
});

test('should fail if value is not present', () => {
	const validator = new RequiredValidator();
	expect(validator.validate()).toBe(false);
});