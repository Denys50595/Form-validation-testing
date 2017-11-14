const EmailValidator = require('./email-validator.js').EmailValidator;

test('should pass with valid email', () => {
	const validator = new EmailValidator();
	expect(validator.validate('asd@asd.asd')).toBe(true);
});

test('should fail with invalid email', () => {
	const validator = new EmailValidator();
	expect(validator.validate('asd@@asd.asd')).toBe(false);
});

test('digits in email are valid', () => {
	const validator = new EmailValidator();
	expect(validator.validate('sfgsgr12345@sdfsf.frw')).toBe(true);
});

test('plus and underscore in email field is valid', () => {
	const validator = new EmailValidator();
	expect(validator.validate('sf+one_12345@sdfsf.frw')).toBe(true);
});

test('should pass if email field is empty', () => {
	const validator = new EmailValidator();
	expect(validator.validate('')).toBe(false);
})