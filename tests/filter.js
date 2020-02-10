'use strict';

QUnit.module('Проверка работы функции filter', function () {
	QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует несколько последовательных левых скобок', function (assert) {
		const input = '<nav> 0 / 1 << 1 / 0 </nav>';

		const output = filter(input, ['nav']);

		const expected = '<nav> 0 / 1 &lt;&lt; 1 / 0 </nav>';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует несколько последовательных правых скобок', function (assert) {
		const input = '<nav> 0 / 1 << 1 / 0 </nav>';

		const output = filter(input, ['nav']);

		const expected = '<nav> 0 / 1 &lt;&lt; 1 / 0 </nav>';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
		assert.strictEqual(filter(`<script>alert('1');</script>`, []), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
	});

	QUnit.test('filter корректно обрабатывает невалидные аргументы', function (assert) {
		try {
			filter(1000, [ 'strong', 'em' ]);
		} catch (e) {
			assert.ok(e instanceof CustomError)
		}
		try {
			filter('<strong>string<1>not valid</1></strong>', 1000);
		} catch (e) {
			assert.ok(e instanceof CustomError)
		}
		assert.strictEqual(filter('<strong>string<1>not valid</1></strong>', [ 'strong', 1 ]), '<strong>string&lt;1&gt;not valid&lt;/1&gt;</strong>');
	});
});
