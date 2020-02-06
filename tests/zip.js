'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция правильно возвращает копии', function (assert) {

		let obj1 = {
			name: 'Jhon',
			surname: 'Cena',
			field: {
				a:'b'
			}
		};

		let obj2 = {
			number: 11,
			name: 'eleven',
			field: {
				g:'c',
			}
		};

		const obj3 = {
			name: 'Jhon',
			surname: 'Cena',
			number: 11,
			field: {
				a:'b',
			}
		};

		let zipObj = zip(obj1, obj2);
		assert.deepEqual(zipObj, obj3);

		obj1.field.a = 123;
		obj1.field.g = null;

		assert.deepEqual(zipObj, obj3);
	});

	QUnit.test('Функция правильно обрабатывает циклические объекты', function (assert) {

		let obj1 = {
			number: {
				obj2: null,
			}
		};

		let obj2 = {
			field: {
				obj1: undefined,
			}
		};

		obj1.number.obj2 = obj2;
		obj2.field.obj1 = obj1;

		const obj3 = {
			number: {
				obj2: obj2,
			},
			field: {
				obj1: obj1,
			}
		};

		let zipObj = zip(obj1, obj2);
		assert.deepEqual(zipObj, obj3);

		zipObj.number.obj2 = 11;
		zipObj.field.obj1 = 'name';

		assert.deepEqual(obj1.number.obj2, obj2);
		assert.deepEqual(obj2.field.obj1, obj1);
	});

	
	QUnit.test('Нагрузочный тест', function (assert) {

		let obj1 = {
			b:{
				c:{
					c1: {a: 123},
					c2: {b: 321},
					c3: {c: 213},
				},
				d:{
					e: {
						f: {hi:'hi'}
					}
				}
			},
			l: {l: 'l'},
			k: {},
			f: {}
		};

		let obj2 = {
			l: {l: 'l'},
			k: {k: 'k'},
			f: {f: 'f'},
			g: {
				p:{
					q: 'q',
					r: 'r',
					s: 's',
				},
				h: {h: 'h'}
			}
		};

		obj1.b.c.obj2 = obj2;
		obj2.g.p.obj1 = obj1;

		const obj3 = {
			l: {l:'l'},
			k: {k: 'k'},
			f: {f: 'f'},
			b:{
				c:{
					c1: {a: 123},
					c2: {b: 321},
					c3: {c: 213},
					obj2: obj2,
				},
				d:{
					e: {
						f: {hi:'hi'}
					}
				}
			},
			g: {
				p:{
					q: 'q',
					r: 'r',
					s: 's',
					obj1: obj1,
				},
				h: {h: 'h'}
			}
		};

		let zipObj = zip(obj2, obj1);
		assert.deepEqual(zipObj, obj3);

		zipObj.g.p.obj1.l.l = 'not l';
		zipObj.b.c.obj2.l.l = 'not l';

		assert.deepEqual(obj1.l.l, 'l');
		assert.deepEqual(obj2.l.l, 'l');
	});


});
