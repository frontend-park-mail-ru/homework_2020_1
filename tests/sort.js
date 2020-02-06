'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});
});

QUnit.module('Мои тесты функции sort', function () {
	QUnit.test('Функция нормально работает с цифрами', function (assert) {
		assert.strictEqual(sort('42'), '24', 'Работает с одним числом');
		assert.strictEqual(sort('129543432'), '122334459');
		assert.strictEqual(sort('283 321 548'), '123 238 458', 'Работает с несколькими числами');
		assert.strictEqual(sort('4122 457434 45345 54646'), '1224 344457 34455 44566');
	});

	QUnit.test('Функция нормально работает со строковым представлением данных', function (assert) {
		assert.strictEqual(sort('ба 63 двёег 4122 196'), '1224 169 36 Аб Вгдеё'
			, 'Работает со словами и числами');
		assert.strictEqual(sort('баавы авы 21312315'), '11122335 Аабвы Авы');
		assert.strictEqual(sort('баавы12104 авы21312315 fdsf4'), '01124аабвы 11122335авы 4dffs'
			, 'Работает со смешанными цифрами и буквами и локалями');
		assert.strictEqual(sort('10dfd4 ваыфв 56 авы21312315'), '014ddf 11122335авы 56 Аввфы');
	});

	QUnit.test('Функция обрабатывает невалидные данные', function (assert) {
		assert.strictEqual(sort([1, 2, 3, 'ADSFSD']), undefined, 'Обрабатывает массив');
		assert.strictEqual(sort(1232), undefined, 'Обрабатывает число');
		assert.strictEqual(sort({}), undefined, 'Обрабатывает object');
		assert.strictEqual(sort(null), undefined, 'Обрабатывает null');
		assert.strictEqual(sort(undefined), undefined, 'Обрабатывает undefined');
		assert.strictEqual(sort(true), undefined, 'Обрабатывает true');
		assert.strictEqual(sort(false), undefined, 'Обрабатывает false');
	});
});
