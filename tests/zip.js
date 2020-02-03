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

    QUnit.test('Копирование методов', function (assert) {
        let obj = {
            name: 'scotch.io',
            exec: function ert() {
                return true;
            },
        };

        assert.deepEqual(zip(obj), obj);
    });

    QUnit.test('Невалидные данные', function (assert) {
        assert.deepEqual(zip(''), {});
        assert.deepEqual(zip(123), {});
        assert.deepEqual(zip('Test'), {});
        assert.deepEqual(zip([1, 2, 3]), {});
        let obj = {
            a: 'a',
            b: {
                c: 'c',
                d: 'd',
            },
        }

        obj.c = obj.b;
        obj.e = obj.a;
        obj.b.c = obj.c;
        obj.b.d = obj.b;
        obj.b.e = obj.b.c;
        assert.deepEqual(zip(obj),Object.assign({}, obj));
    });

    QUnit.test('Глубокое копирование', function (assert) {
        let obj = {
            a: 1,
            b: {
                c: 2,
            },
        };

        const zip_res = zip(obj);
        assert.deepEqual(zip_res, {a: 1, b: {c: 2}});

        let newObj = Object.assign({}, obj);

        newObj.a = 20;
        newObj.b.c = 30;

        assert.deepEqual(zip_res, {a: 1, b: {c: 2}});
    });

    QUnit.test('Слияния вложенных объектов', function (assert) {
        const obj12 = {a: {b: {c: 1, d: 1, e: {r: 1}}}};
        const obj11 = {a: {b: {d: 12}}};

        const res_obj1 = {a: {b: {c: 1, d: 12, e: {r: 1}}}};
        assert.deepEqual(zip(obj11, obj12), res_obj1);

        const obj21 = {a: {b: {x: 12}}};
        const obj22 = {a: {b: {c: 1, d: 1, e: {r: 1}}}};

        const res_obj2 = {a: {b: {c: 1, d: 1, x: 12, e: {r: 1}}}};
        assert.deepEqual(zip(obj21, obj22), res_obj2);

        const obj31 = {g: {a: 1}};
        const obj32 = {gg: {a: 2}};

        const res_obj3 = {g: {a: 1}, gg: {a: 2}};
        assert.deepEqual(zip(obj31, obj32), res_obj3);

        const obj51 = {a: {b: 1}};
        const obj53 = {a: {b: 0}};
        const obj52 = {n: {b: 2}};
        const obj54 = {x: {s: 4}};

        const res_obj4 = {a: {b: 1}, n: {b: 2}, x: {s: 4}};
        assert.deepEqual(zip(obj51, obj52, obj53, obj54), res_obj4);
    });
});
