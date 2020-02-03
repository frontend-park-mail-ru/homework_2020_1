'use strict';

QUnit.module('Тестируем функцию solve', function () {
    QUnit.test('solve работает правильно ', function (assert) {
        assert.strictEqual(solve('x + 1', 1), 2);
        assert.strictEqual(solve('2 + x - 1', 5), 6);
        assert.strictEqual(solve('2 * x - 1', 5), 9);
        assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
        assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
        assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
        assert.strictEqual(solve('x*x - (1000)+((((x-8)+x*x*5*x)*2)*x)', 2), -860);
        assert.strictEqual(solve('100-100', 30), 0);
        assert.strictEqual(solve('(x*x+x*x-x)*(6)', -10), 1260);
    });
});
