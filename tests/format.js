'use strict';

QUnit.module('Тестируем функцию format', function () {

	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c несколькими колонками(другой input)', function (assert) {
		const input = [ 0, 1, 2, -5, -100000, 1020, 920, 22, 78, 0, 123456 ];
		const expected4 =
			'      0    1      2 -5\n' +
			'-100000 1020    920 22\n' +
			'     78    0 123456';

		const expected5 =
			'     0   1  2 -5 -100000\n' +
			'  1020 920 22 78       0\n'  +
			'123456';

		const expected12 = '0 1 2 -5 -100000 1020 920 22 78 0 123456';

		assert.strictEqual(format(input, 4), expected4);
		assert.strictEqual(format(input, 5), expected5);
		assert.strictEqual(format(input, 12), expected12);
	});


	QUnit.test('format работает правильно c одной колонкой, "+" и "-" числами, и числами в строках', function (assert) {
		const input = [ 0, '1', 2, '-10', -100, 1000, '10000' ];
		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'  -10\n' +
			' -100\n' +
			' 1000\n' +
			'10000';
		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками и строками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, '-100', 1000, '10000', -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c одним числом', function (assert) {
		const input = 0;
		const expected = '0';
		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format работает правильно c массивом из одного числа', function (assert) {
		const input = [0];
		const expected = '0';
		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format работает правильно, когда количество чисел равно количеству строк (>1)', function (assert) {
		const input = [ 0, 1, 2, 3, 4];
		const expected = '0 1 2 3 4';
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format возвращает null, если количество колонок не является числом', function (assert) {
		const input = [ 0, 1, 2, 3, 4];
		const expected = null;
		assert.strictEqual(format(input, 'Hello, World!'), expected);
	});

	QUnit.test('format возвращает null, если подаем числа с плавующей точкой', function (assert) {
		const input = [ 0, 1.1, 2, 3, 4];
		const expected = null;
		assert.strictEqual(format(input, 3), expected);
	});

	QUnit.test('format возвращает null, если подается некорректный массив со строками', function (assert) {
		const input = [ 0, 'hello', 2, 'world', 4];
		const expected = null;
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format возвращает null, если подается некорректный массив с константами', function (assert) {
		const input = [ 0, -Infinity, 2, Infinity, 4];
		const expected = null;
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format возвращает null, если все данные некорректны', function (assert) {
		const input = [ 0, 'hello', 2, '1.1', 4, 1.2, Infinity, -Infinity];
		const expected = null;
		assert.strictEqual(format(input, 'Hello, World!'), expected);
	});
});
