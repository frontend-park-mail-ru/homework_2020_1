'use strict';

QUnit.module('Тестируем функцию set', function () {
	QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'}, 'object.foo: \'bar\' => object.foo: \'baz\'');
		assert.deepEqual(set(object, '.deep.hested.field', 42), object2, 'object.deep.hested.field: \'baz\' => object.deep.hested.field: 42');

		assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3, 'object.deep.hested.field: 42 => object.deep.hested.foo: \'bar\'');
		assert.deepEqual(set(object, '.deep', null), object4, 'object.deep.hested.foo: \'bar\' => object.deep: null');
	});

	QUnit.test('set изменяет переданный объект', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, '.foo', 'baz');
		assert.deepEqual(object, object1, 'object.foo: \'bar\' => object.foo: \'baz\'');
		assert.deepEqual(object2, object1, 'object2 === object');
	});

	QUnit.test('set работает правильно c массивами', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, '.foo.0', 42), new1, 'object.foo: [ 1, 2, 3 ] => object.foo: [ 42, 2, 3 ]');
		assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2, 'object.bar.0.foobar: \'42\' => object.bar.0.foobar: \'baz\'');
	});

	QUnit.test('set работает правильно c объектами без свойств', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.nested.field', null), object, 'object => object.deep.nested.field: null');
	});

	QUnit.test('set работает правильно с пустым путем к свойству объекта', function (assert) {
		const object = {
			deep: {
				nested: {
					field: 'bar'
				}
			}
		};

		assert.deepEqual(set(object, '', null), object, 'object.deep.nested.field: \'bar\' не изменился на null');
		assert.deepEqual(set(object, '', 'baz'), object, 'object.deep.nested.field: \'bar\' не изменился на \'baz\'');
		assert.deepEqual(set(object, '', 42), object, 'object.deep.nested.field: \'bar\' не изменился на 42');
	});
});
