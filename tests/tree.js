'use strict';

QUnit.module('Тестируем функцию tree', function () {
    QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
        assert.strictEqual(tree(0), '');
        assert.strictEqual(tree(1), '');
        assert.strictEqual(tree(2), '');
        assert.strictEqual(tree('0'), '');
        assert.strictEqual(tree('1'), '');
        assert.strictEqual(tree('2'), '');
    });

    QUnit.test('Ёлочка высотой 3', function (assert) {
        const expected =
            ' * \n' +
            '***\n' +
            ' | \n';
        assert.strictEqual(tree(3), expected);
        assert.strictEqual(tree('3'), expected);
    });

    QUnit.test('Ёлочка высотой 4', function (assert) {
        const expected =
            '  *  \n' +
            ' *** \n' +
            '*****\n' +
            '  |  \n';
        assert.strictEqual(tree(4), expected);
        assert.strictEqual(tree('4'), expected);
    });

    QUnit.test('Ёлочка высотой 5', function (assert) {
        const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree('5'), expected);
    });

    QUnit.test('Ёлочка высотой 8', function (assert) {
        const expected =
            '      *      \n' +
            '     ***     \n' +
            '    *****    \n' +
            '   *******   \n' +
            '  *********  \n' +
            ' *********** \n' +
            '*************\n' +
            '      |      \n';
        assert.strictEqual(tree(8), expected);
        assert.strictEqual(tree('8'), expected);
    });
});

QUnit.module('Парочка дополнительных тестов функции tree', function () {
    QUnit.test('Ёлочка высотой 6', function (assert) {
        const expected =
            '    *    \n' +
            '   ***   \n' +
            '  *****  \n' +
            ' ******* \n' +
            '*********\n' +
            '    |    \n';
        assert.strictEqual(tree(6), expected);
        assert.strictEqual(tree('6'), expected);
    });

    QUnit.test('Ёлочка высотой 7', function (assert) {
        const expected =
            '     *     \n' +
            '    ***    \n' +
            '   *****   \n' +
            '  *******  \n' +
            ' ********* \n' +
            '***********\n' +
            '     |     \n';
        assert.strictEqual(tree(7), expected);
        assert.strictEqual(tree('7'), expected);
    });

    QUnit.test('Ёлочка высотой 9', function (assert) {
        const expected =
            '       *       \n' +
            '      ***      \n' +
            '     *****     \n' +
            '    *******    \n' +
            '   *********   \n' +
            '  ***********  \n' +
            ' ************* \n' +
            '***************\n' +
            '       |       \n';
        assert.strictEqual(tree(9), expected);
        assert.strictEqual(tree('9'), expected);
    });
});

QUnit.module('Некорректные данные', function () {
    QUnit.test('Некорректная строка на вход', function (assert) {
        assert.strictEqual(tree('1jfopejg'), '');
        assert.strictEqual(tree('7jdihsdsfgrgb'), '');
        assert.strictEqual(tree('6.6765123hjkcs'), '');
        assert.strictEqual(tree('QWERTY'), '');
    });
    QUnit.test('Дробное число на вход', function (assert) {
        assert.strictEqual(tree(4.5777), '');
        assert.strictEqual(tree(3.0032), '');
    });
    QUnit.test('Объект на вход', function (assert) {
        assert.strictEqual(tree({key : 'value'}), '');
    });
    QUnit.test('Массив на вход', function (assert) {
        assert.strictEqual(tree([]), '');
    });
});