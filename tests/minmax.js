'use strict';

QUnit.module('Тестируем функцию minmax', function () {

	QUnit.test('minmax работает правильно на разных входных данных', function (assert) {
		// по условию фунция работает только со строками
		assert.deepEqual(minmax(), [ undefined, undefined ], 'Вызов без параметров');
		assert.deepEqual(minmax('this is a string'), [ undefined, undefined ], 'Вызов со строкой');
		assert.deepEqual(minmax(2), [ undefined, undefined ], 'Вызов с числом');
		assert.deepEqual(minmax(true), [ undefined, undefined ], 'Вызов с логической переменной');
		assert.deepEqual(minmax(null), [ undefined, undefined ], 'Вызов с null');
		assert.deepEqual(minmax(new Number(0)), [ undefined, undefined ], 'Вызов с объектом');
		assert.deepEqual(minmax([]), [ undefined, undefined ], 'Вызов c массивом');
		assert.deepEqual(minmax(Math.min), [ undefined, undefined ], 'Вызов c функцией');
	});

	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
		assert.deepEqual(minmax('true false NaN undefined'), [ undefined, undefined ], 'Не-числовые типы');
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
		assert.deepEqual(minmax('+0'), [ 0, 0 ], 'Корректная обработка знака');
		assert.deepEqual(minmax('-0'), [ 0, 0 ], 'Корректная обработка знака');
		assert.deepEqual(minmax('+2.3'), [ 2.3, 2.3], 'Корректная обработка знака');
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
		assert.deepEqual(minmax('-1 -2.4 -3.2'), [ -3.2, -1 ], 'Все числа отрицательные');
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
	});
});
