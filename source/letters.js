'use strict';

/**
 * Удаляет из строки символы, которые встречаются больше одного раза
 * @param str - Исходная строка
 * @param format - При true оставляет первую встречающуюся букву, при false - последнюю
 * @returns {string} - Полученная строка
 */
function letters(str, format) {
    if (format === true) {
        return str.split('').filter((letter, i, array) => {
            return array.indexOf(letter) === i;
        }).join('');
    }
    if (format === false) {
        return str.split('').filter((letter, i, array) => {
            return array.lastIndexOf(letter) === i;
        }).join('')
    }
    return str.split('').filter((letter, i, array) => {
        return array.indexOf(letter) === array.lastIndexOf(letter);
    }).join('');
}