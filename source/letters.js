'use strict';

/**
 * Удаляет из строки символы, которые встречаются больше одного раза
 * @param str - Исходная строка
 * @param format - При true оставляет первую встречающуюся букву, при false - последнюю
 * @returns {string} - Полученная строка
 */
const letters = (str, format) => {
    if (typeof str !== 'string') {
        return undefined;
    }

    switch (format) {
        case true:
            return str.split('').filter((letter, i, array) => {
                return array.indexOf(letter) === i;
            }).join('');

        case false:
            return str.split('').filter((letter, i, array) => {
                return array.lastIndexOf(letter) === i;
            }).join('');

        case undefined:
            return str.split('').filter((letter, i, array) => {
                return array.indexOf(letter) === array.lastIndexOf(letter);
            }).join('');

        default:
            return undefined;
    }
};