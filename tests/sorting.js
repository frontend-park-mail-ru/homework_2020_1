'use strict';

QUnit.module('Тестируем функцию sorting', function () {

	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'}
		];
		const actual = sorting(initial, [ 'id', 'prop1' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});
});

QUnit.module('Тестируем функцию sorting Aleksey Sirmais tests', function () {

	QUnit.test('sorting сортирует по нескольким полям, добавлен  bool, undefined', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 0, id: undefined},
			{prop1: true, id: '1'},
			{prop1: true, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: false, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'},
		];
		const actual = sorting(initial, [ 'id', 'prop1' ]);

		const expected = [
			{prop1: true, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: false, id: '2'},
			{prop1: true, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 0, id: undefined},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям, больше полей, отриц значения', function (assert) {
		const initial = [
			{prop1: 3, prop2: 54, id: 'G'},
			{prop1: 3, prop2: 54, id: 'L'},
			{prop1: 1, prop2: 42, id: 'A'},
			{prop1: 1, prop2: 45, id: 'D'},
			{prop1: 4, prop2: 14, id: 'v'},
			{prop1: 4, prop2: 4, id: 'A'},
			{prop1: -54, prop2: 13, id: 'l'},
			{prop1: 2, prop2: -123, id: 'A'},
		];
		const actual = sorting(initial, [ 'prop1', 'prop2', 'id' ]);

		const expected = [
			{prop1: -54, prop2: 13, id: 'l'},
			{prop1: 1, prop2: 42, id: 'A'},
			{prop1: 1, prop2: 45, id: 'D'},
			{prop1: 2, prop2: -123, id: 'A'},
			{prop1: 3, prop2: 54, id: 'G'},
			{prop1: 3, prop2: 54, id: 'L'},
			{prop1: 4, prop2: 4, id: 'A'},
			{prop1: 4, prop2: 14, id: 'v'},
		];

		assert.deepEqual(actual, expected);
	});


});