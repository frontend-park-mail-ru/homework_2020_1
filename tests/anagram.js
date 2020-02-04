'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка слов с различными регистрами', function (assert) {
		const input = [
			'Кот', 'пила', 'бароККо',
			'стоП', 'ток', 'кошка',
			'лИпа', 'Коробка', 'ПОСТ'
		];

		const output = [
			[ 'Коробка', 'бароККо' ],
			[ 'Кот', 'ток' ],
			[ 'ПОСТ', 'стоП' ],
			[ 'лИпа', 'пила' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка одинаковых слов', function (assert) {
		const input = [
			'кот', 'кот', 'кот'
		];

		const output = [
			[ 'кот', 'кот', 'кот']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка спика без анаграмм', function (assert) {
		const input = [
			'привет', 'вечер', 'ночь', 'глава'
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});
});
