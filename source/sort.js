'use strict';

/**
 * Сравнение строк с не-ASCII символами.
 * @param {String} a - Первая строка.
 * @param {String} b - Вторая строка.
 * @returns {Number} Возвращает 0 если строки равны, -1 если a < b и 1 если a > b.
 */
const localeCompare = (a, b) => a.localeCompare(b);

/**
 * Cортирует все символы в строке.
 * Возвращает новую строку.
 * @example
 * // returnts 'абклорь'
 * sortWord('корабль');
 * @param {String} str - Входная строка.
 * @returns {String}
*/
const sortWord = str => str.split('').sort(localeCompare).join('');

/**
 * Делает первый символ в стоке заглавным, если это буква.
 * Возвращает новую строку.
 * @example
 * // returns 'Корабль уплыл.'
 * toUpCaseFirst('корабль уплыл');
 * @example
 * // returns '1 корабль уплыл.'
 * toUpCaseFirst('1 корабль уплыл');
 * @param {String} str - Входная строка.
 * @returns {String}
*/
const toUpCaseFirst = str => str.charAt(0).toLocaleUpperCase() + str.slice(1);

/**
 * Cортирует все символы в строке и делает первый символ в стоке заглавным, если это буква.
 * Возвращает новую строку.
 * @example
 * // returnts 'Абклорь'
 * sortWord('корабль');
 * @param {String} str - Входная строка.
 * @returns {String}
*/
const makeWord = str => toUpCaseFirst(sortWord(str));

/**
 * Сортирует все буква в словах по алфавиту, а потом получившиеся слова в предложении — тоже.
 * Первую букву каждого слова делает прописной, остальные — строчными.
 * Возвращает новую строку.
 * @example
 * // returnts 'Абклорь Амрс Ан Еиийккмоссч Еилтт'
 * sort('космический корабль летит на марс');
 * @param {String} str - Входная строка.
 * @returns {String} Возвращает результат в случае, если входной аргумент это строка, иначе undefined.
*/
const sort = str => typeof str === 'string' || str instanceof String
                        ? str.toLocaleLowerCase().split(' ').map(makeWord).sort(localeCompare).join(' ')
                        : void 0;
