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


    QUnit.test('Функция работает без объектов', function (assert) {
        assert.deepEqual(zip(), {});
    });

    QUnit.test('Функция работает с объектами, элементы которых повторяются ', function (assert) {
        assert.deepEqual(zip({}), {});
        assert.deepEqual(zip({answer: 42}), {answer: 42});
        assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});


        let object = function (a) {
            return a;
        };

        const obj1 = {
            cost: '120$',
            func: object
        };

        const obj = {
            count: 0
        };

        const obj2 = {
            count: 0,
            cost: '120$',
            func: object
        };

        assert.deepEqual(zip(obj, obj1), obj2);
    });

    QUnit.test('Функция работает с объектами, внутри которых есть функции , объекты ', function (assert) {
        assert.deepEqual(zip({}), {});
        assert.deepEqual(zip({answer: 42}), {answer: 42});
        assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});


        let object = function (a) {
            return a;
        };

        const objectDefault = {
            aut: 20,
            exect: "asdasd",
            func: object
        };

        const obj1 = {
            cost: '120$',
            count: 26,
            elem: objectDefault
        };

        const obj = {
            count: 0
        };

        const obj2 = {
            cost: '120$',
            count: 26,
            elem: objectDefault
        };


        assert.deepEqual(zip(obj1, obj), obj2);
    });

    QUnit.test('Функция работает с объектами, внутри которых есть функции, объекты и переменные', function (assert) {
        assert.deepEqual(zip({}), {});
        assert.deepEqual(zip({answer: 42}), {answer: 42});
        assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});


        let object = function (a) {
            return a;
        };

        const objectDefault = {
            aut: 20,
            exect: "asdasd",
            func: object
        };

        const obj1 = {
            elem: objectDefault,
            func1: object
        };

        const obj2 = {
            cost: '120$',
            count: 0,
            elem: objectDefault,
            func1: object
        };

        const obj3 = {
            count: 26
        };

        const obj4 = {
            cost: '120$'
        };

        const obj = {
            count: 0
        };

        assert.deepEqual(zip(obj, obj1, obj3, obj4), obj2);
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

    QUnit.test('Функция работает с объектами среди которых есть объекты с одним повторяющимся элементом', function (assert) {
        assert.deepEqual(zip({answer: 40}, {answer: 42}), {answer: 40});
        assert.deepEqual(zip({answer: -100}, {answer: 42}), {answer: -100});
        assert.deepEqual(zip({answer: 0}, {answer: 0}), {answer: 0});
        assert.deepEqual(zip({answer: 2}, {answer: 42}), {answer: 2});
        assert.deepEqual(zip({}, {name: 'yeeet'}, {answer: 42}, {answer: 43}, {name: 'Georg'}), {
            answer: 42,
            name: 'yeeet'
        });
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

    QUnit.test('Функция правильно работает c  массивами', function (assert) {
        assert.deepEqual(zip([0, 5, 7, 8]), {
            "0": 0,
            "1": 5,
            "2": 7,
            "3": 8
        }, 'Значение должно браться из первого встретившегося поля');
        assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}, [2]), {age: 5, "0": 2});

    });


});



