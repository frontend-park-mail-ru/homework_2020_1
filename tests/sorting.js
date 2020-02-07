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

	QUnit.test('sorting сортирует по одному несуществующему и одному реальному полю', function (assert) {
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
		const actual = sorting(initial, [ 'id2', 'prop1' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по одному реальному и одному несуществующему полю', function (assert) {
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
		const actual = sorting(initial, [ 'prop1', 'id2' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});
	
	QUnit.test('sorting сортирует по несуществующим полям', function (assert) {
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
		const actual = sorting(initial, [ 'id2', 'prop3' ]);

		const expected = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});
	
	QUnit.test('sorting получает вместо массива строку', function(assert) {
		const initial = "abc";
		assert.throws(
		  function () {
		    sorting(initial, [ 'id' ]);
		  },
		  function (err) {
		    return err.toString() !== 'Arr and keys should be arrays';
		  }
		);
	});
	
	QUnit.test('sorting получает вместо массива число', function(assert) {
		const initial = 12;
		assert.throws(
		  function () {
		    sorting(initial, [ 'id' ]);
		  },
		  function (err) {
		    return err.toString() !== 'Arr and keys should be arrays';
		  }
		);
	});
	
	QUnit.test('sorting получает вместо массива полей строку', function(assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'}
		];

		assert.throws(
		  function () {
		    sorting(initial, "abc");
		  },
		  function (err) {
		    return err.toString() !== 'Arr and keys should be arrays';
		  }
		);
	});
	
	QUnit.test('sorting получает вместо массива полей число', function(assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'}
		];
		
		assert.throws(
		  function () {
		    sorting(initial, 12);
		  },
		  function (err) {
		    return err.toString() !== 'Arr and keys should be arrays';
		  }
		);
	});
	
	
});
