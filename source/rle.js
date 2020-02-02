'use strict';

/**
 * @description Разница между символами UNICODE 
 * @const {number}
 * @default
 */

const UNICODE_SHIFT = 32;

/**
 * @description Создание строки для регулярного выражения
 * @returns {string} возвращает созданную строку
 */

const createRegStr = () => {
    let regStr = '([A]){2,}|([a]){2,}';

    for (let i = 'B'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i) {
        regStr += `|([${String.fromCharCode(i)}]){2,}` +
                  `|([${String.fromCharCode(i + UNICODE_SHIFT)}]){2,}`;
    }
    return regStr;
};

/**
 * @description реализация rle-сжатия
 * @param {string} исходная строка
 * @returns {string} возвращает результирующую сжатую строку
 * @returns {null} в случае, если на вход пришла не строка
 */

const rle = (input) => {
    if (typeof input !== 'string') {
        return null;
    }

    const regStr = createRegStr();
    const regExp = new RegExp(regStr, 'g');

    return input.replace(regExp, (match) => {
        return match[0] + match.length;
    });
};
