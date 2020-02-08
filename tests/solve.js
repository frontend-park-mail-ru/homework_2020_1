'use strict';

QUnit.module('Тестируем функцию solve', function () {
    QUnit.test('Проверка простых выражений', function (assert) {
        assert.strictEqual(solve('x + 1', 1), 2);
        assert.strictEqual(solve('100 - 100', 30), 0);
    });

    QUnit.test('Тестирование нескольких операндов', function (assert) {
        assert.strictEqual(solve('2 + x - 1', 5), 6);
        assert.strictEqual(solve('2 * x - 1', 5), 9);
    });

    QUnit.test('Тестирование со скобкам', function (assert) {
        assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
        assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
    });

    QUnit.test('Тестирование с вложенными скобками', function (assert) {
        assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
        assert.strictEqual(solve('( x *x + x * x- x ) * (2-6)', -10), -840);

    });
    //
    QUnit.test('Тестирование на невалидные данные', function (assert) {
        assert.strictEqual(solve('xx+null', 2), "Incorrect data");
        assert.strictEqual(solve('kek*89', 30), "Incorrect data");
    });
});
