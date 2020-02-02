'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('    '), [ undefined, undefined ], 'Вся строка - разделители( пробелы )');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1'), [ 1, 1 ]);
		assert.deepEqual(minmax('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmax('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmax('42'), [ 42, 42 ]);
		assert.deepEqual(minmax('.0'), [ .0, .0 ]);
		assert.deepEqual(minmax('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmax('.01'), [ .01, .01 ]);
		assert.deepEqual(minmax('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmax('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmax('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmax('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
		assert.deepEqual(minmax('undefined NaN -8'), [ -8, -8 ]);
	});

	QUnit.test('minmax правильно ищет минимум и максимум', function (assert) {
		assert.deepEqual(minmax('-5 -10 -3 -8'), [ -10, -3 ], 'Все числа отрицательные');
		assert.deepEqual(minmax('-13, 23423, .23423, 14.88, 22e8, -3*5,не число,,0x34'), [ -13, 2200000000 ]);
	});

	QUnit.test('minmax правильно ищет при максимальных и минимальных значениях', function (assert) {
		assert.deepEqual(minmax('Infinity 2e20'), [ 2e20, Infinity ], 'Максимальное значение');
		assert.deepEqual(minmax('-Infinity -2e20'), [ -Infinity, -2e20 ], 'Минимальное значение');
	});

	QUnit.test('Реакция minmax на некорректный тип входного параметра', function (assert) {
		assert.strictEqual(minmax(30), 'Некорректный тип входных данных');
		assert.strictEqual(minmax([ 1, 2, 3 ]), 'Некорректный тип входных данных');
		assert.strictEqual(minmax(new Object()), 'Некорректный тип входных данных');
	});
});
