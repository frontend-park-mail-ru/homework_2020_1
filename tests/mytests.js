'use strict';

QUnit.module('Мои тесты функции sort', function () {
	QUnit.test('Функция нормально работает с цифрами', function (assert) {
		assert.strictEqual(sort('42'), '24', 'Работает с одним числом');
		assert.strictEqual(sort('129543432'), '122334459');
		assert.strictEqual(sort('283 321 548'), '123 238 458', 'Работает с несколькими числами');
		assert.strictEqual(sort('4122 457434 45345 54646'), '1224 344457 34455 44566');
	});

	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('ба 63 двёег 4122 196'), '1224 169 36 Аб Вгдеё'
			, 'Работает со словами и числами');
		assert.strictEqual(sort('баавы авы 21312315'), '11122335 Аабвы Авы');
		assert.strictEqual(sort('баавы12104 авы21312315 fdsf4'), '01124аабвы 11122335авы 4dffs'
			, 'Работает со смешанными цифрами и буквами и локалями');
		assert.strictEqual(sort('10dfd4 ваыфв 56 авы21312315'), '014ddf 11122335авы 56 Аввфы');
	});
});
