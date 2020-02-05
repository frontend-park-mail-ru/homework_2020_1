'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle: positive tests', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle(''), '');
		assert.strictEqual(rle('ababab'), 'ababab');
		assert.strictEqual(rle('XXXXX'), 'X5');
	});

	QUnit.test('rle: negative tests', function (assert) {
		assert.strictEqual(rle(null), null);
		assert.strictEqual(rle(undefined), null);
		assert.strictEqual(rle('abc123def'), null);
		assert.strictEqual(rle(1234), null);
	});
});
