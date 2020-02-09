'use strict';

/**
 * Удаляет из строки символы, которые встречаются больше одного раза
 * @param str - Исходная строка
 * @param format - При true оставляет первую встречающуюся букву, при false - последнюю
 * @returns {string|undefined} - Полученная строка или undefined
 */
const letters = (str, format) => {
    if (typeof str !== 'string') {
        return;
    }

    switch (true) {
        case format === true:
            return str.split('').filter((letter, i, array) => {
                return array.indexOf(letter) === i;
            }).join('');

        case format === false:
            return str.split('').filter((letter, i, array) => {
                return array.lastIndexOf(letter) === i;
            }).join('');

        case typeof format === 'undefined':
            return str.split('').filter((letter, i, array) => {
                return array.indexOf(letter) === array.lastIndexOf(letter);
            }).join('');

        default:
            return;
    }
};