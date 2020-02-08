'use strict'

/*
    @description Остовляет в строке лишь уникальные символы, если флаг не задан;
                 Если флаг - true, удаляет все повторяющиеся символы, кроме первого;
                 Если флаг - false, удаляет все повторяющиеся символы, кроме последнего.
    @param {string} str Строка для обработки.
    @param {boolean} flag Параметры обработки.
    @returns {string} Обработананя строка.тзь штыефд
*/

const letters = (...args) => {
    if (typeof args[0] !== 'string' || (typeof args[1] !== 'boolean') && typeof args[1] !== 'undefined') {
        throw new Error('Invalid params.');
    }
    switch (typeof args[1]) {
        case "undefined": {
            return args[0].split('').filter((value, index, str) => {
                return str.lastIndexOf(value) === str.indexOf(value);
            }).join('')
        }
        case "boolean": {
            return args[0].split('').filter((value, index, str) => {
                return (args[1] === true) ? (str.indexOf(value) === index) : (str.lastIndexOf(value) === index);
            }).join('')
        }
    }
}
