'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('Изменение порядка следования аргументов не должно приводить к ошибке', function (assert) {
		let euclidResult = euclid(1256, 584, 16256);
		assert.strictEqual(euclidResult, 8, 'euclid(1256, 584, 16256) === 8');
		assert.strictEqual(euclid(584, 16256, 1256), euclidResult, 'euclid(584, 16256, 1256) === euclid(1256, 584, 16256)');
		assert.strictEqual(euclid(16256, 1256, 584), euclidResult, 'euclid(16256, 1256, 584) === euclid(1256, 584, 16265)');
	});

	QUnit.test('Функция корректно работает на отрицательных числах (определена как алгоритм над модулями этих чисел)', function(assert) {
		let resultWithPositive = euclid(585, 81, 189);
		assert.strictEqual(resultWithPositive, 9, 'euclid(585, 81, 189) === 9');

		assert.strictEqual(euclid(-585, 81, -189), resultWithPositive, 'euclid(-585, 81, -189) === 9');
	});

	QUnit.test('Результат должен быть неопределен для набора, состоящего только из нулей', function(assert) {
		assert.strictEqual(euclid(0), UndefinedValue, 'euclid(0) === undefined');
		assert.strictEqual(euclid(0, 0), UndefinedValue, 'euclid(0, 0) === undefined');
		assert.strictEqual(euclid(0, 0, 0, 0, 0, 0), UndefinedValue, 'euclid(0, 0, 0, 0, 0) === undefined');
	});

	QUnit.test('При этом их наличие в определяемом наборе не приводит к ошибке', function(assert) {
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
		assert.strictEqual(euclid(6006, 0, 0, 3738735, 51051, 0), 3003, 'euclid(6006, 0, 0, 3738735, 51051, 0) === 3003');
	});

	QUnit.test('Тест на невалидные данные', function(assert) {
		assert.strictEqual(euclid('data', 5, 1, 'number', 'integer', 10), InvalidData, 'euclid(\'data\', 5, 1, \'number\', \'integer\', 10) - Некорректные входные данные');
		assert.strictEqual(euclid('1', '2', '3', '4', '5'), InvalidData, 'euclid(\'1\', \'2\', \'3\', \'4\', \'5\') - Некорректные входные данные');
	});
});
