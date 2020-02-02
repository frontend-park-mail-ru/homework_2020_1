'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает правильно на маленьких тестах', function (assert) {
		assert.strictEqual(rle(''), '');
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle('a'), 'a');
		assert.strictEqual(rle('kek'), 'kek');
		assert.strictEqual(rle('LOL'), 'LOL');
	});

	QUnit.test('rle работает правильно на тестах побольше', function (assert) {
		assert.strictEqual(rle('LOLkek'), 'LOLkek');
		assert.strictEqual(rle('LOOOOOOOL'), 'LO7L');
		assert.strictEqual(rle('lOlKeK'), 'lOlKeK');
		assert.strictEqual(rle('LLooLLKEK'), 'L2o2L2KEK');
		assert.strictEqual(rle('QWERTYqwertyQWERTYqwerty'), 'QWERTYqwertyQWERTYqwerty');
		assert.strictEqual(rle('AAAaaaBBbbCc'), 'A3a3B2b2Cc');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AAAAAAAAAAaaaaaaaaaaZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzz'), 'A10a10Z20z20');
	});

	QUnit.test('rle работает правильно на некорректных входных данных', function (assert) {
		assert.strictEqual(rle(), null);
		assert.strictEqual(rle(123), null);
		assert.strictEqual(rle(true), null);
		assert.strictEqual(rle(NaN), null);
	});

});
