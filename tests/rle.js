'use strict';

const check = (func, params, exn_message) => {
	try {
		func(params);
	}
	catch (err) {
		return err.message === exn_message;
	}
}

QUnit.module('rle-function testing', function () {

	QUnit.test('rle: positive tests', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle(''), '');
		assert.strictEqual(rle('ababab'), 'ababab');
		assert.strictEqual(rle('XXXXX'), 'X5');
	});

	QUnit.test('rle: invalid input', function (assert) {
		assert.strictEqual( check(rle, null, RLE_ERROR_TYPE) , true);
		assert.strictEqual( check(rle, undefined, RLE_ERROR_TYPE) , true);
		assert.strictEqual( check(rle, 1234, RLE_ERROR_TYPE) , true);
		assert.strictEqual( check(rle, 'abc123def', RLE_ERROR_NUMBERS) , true);
	});
});
