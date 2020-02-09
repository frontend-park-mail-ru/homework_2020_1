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
		assert.strictEqual(solve('-6 * (-x)', 7), 42);
	});

	QUnit.test('solve работает с невалидными входными данными', function (assert) {
		assert.throws(() => solve(5, 4), TypeError(WRONG_PARAMS));
		assert.throws(() => solve('x + 5', 'five'), TypeError(WRONG_PARAMS));
		assert.throws(() => solve('5 + xx - x', 1), SyntaxError(INVALID_EXPR));
		assert.throws(() => solve('5 + - x', 1), SyntaxError(INVALID_EXPR));
		assert.throws(() => solve('5 56 + x', 0), SyntaxError(INVALID_EXPR));
		assert.throws(() => solve('x x x', 5), SyntaxError(INVALID_EXPR));
		assert.throws(() => solve('5 plus 6 plus x', 3), SyntaxError(INVALID_EXPR));
	});
});
