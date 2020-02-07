'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('(x - 6) * (x + 4) - 5 * x', 2), -34);
		assert.strictEqual(solve('1 + 8 * x * x', 10), 801);
		assert.strictEqual(solve('5 - (x - 1) * (x + 2) * (x + 3)', 3), -55);
		assert.strictEqual(solve(5, 4), undefined);
		assert.strictEqual(solve('x + 5', 'five'), undefined);
		assert.strictEqual(solve('5 + xx - x', 1), undefined);
		assert.strictEqual(solve('5 56 + x', 0), undefined);
		assert.strictEqual(solve('x x x', 5), undefined);
		assert.strictEqual(solve('5 plus 6 plus x', 3), undefined);
	});
});
