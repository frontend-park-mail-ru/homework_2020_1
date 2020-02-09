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

    switch(true) {
        case typeof flag === 'undefined' && typeof str === 'string': {
            return str.split('').filter((value, index, str) => {
                return str.lastIndexOf(value) === str.indexOf(value);
            }).join('')
        }
        case typeof flag === 'boolean' && typeof str === 'string': {
            return str.split('').filter((value, index, str) => {
                return (flag === true) ? (str.indexOf(value) === index) : (str.lastIndexOf(value) === index);
            }).join('')
        }
        default: {
            throw new Error('Invalid params.');
        }
    }
}
