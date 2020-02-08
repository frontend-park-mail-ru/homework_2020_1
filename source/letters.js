'use strict'

/*
    @description Остовляет в строке лишь уникальные символы, если флаг не задан;
                 Если флаг - true, удаляет все повторяющиеся символы, кроме первого;
                 Если флаг - false, удаляет все повторяющиеся символы, кроме последнего.
    @param {string} str Строка для обработки.
    @param {boolean} flag Параметры обработки.
    @returns {string} Обработананя строка.
*/

const letters = (str, flag) => {
    if (typeof str !== 'string' || (typeof flag !== 'boolean' && typeof flag !== 'undefined')) {
        throw new Error('Invalid params.');
    }

    if (typeof flag === 'undefined') {
        return str.split('').filter((value, index, str) => {
            return str.lastIndexOf(value) === str.indexOf(value);
        }).join('')
    } else if (typeof flag === 'boolean') {
        return str.split('').filter((value, index, str) => {
            return (flag === true) ? (str.indexOf(value) === index) : (str.lastIndexOf(value) === index);
        }).join('')
    }
}

