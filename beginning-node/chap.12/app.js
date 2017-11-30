const assert = require('assert');

describe('our test suite', () => {
	it('Should pass this test', () => {
		assert.equal(1,1, '1 should be equal to 1');
	});

	it('Should fail the test', () => {
		assert.equal(1, 0, '1 should be equal to 0')
	});
});