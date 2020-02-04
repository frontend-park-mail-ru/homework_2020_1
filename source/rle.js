'use strict';
/**
 * @description реализация rle-сжатия
 * @param {string} input исходная строка
 * @returns {string, undefined} возвращает результирующую сжатую строку(output),
 * null - в случае, если на вход пришла не строка
 */
const rle = (input) => {
    if (typeof input !== 'string') {
        return undefined;
    }

    let output = input;

    for (let currentPos = 0; currentPos < output.length;) {
        const regStr = `([${output[currentPos]}]){2,9}`;
        const regExp = new RegExp(regStr, 'g');
        output = output.replace(regExp, (match) => {
            ++currentPos;
            return match[0] + match.length;
        });
        ++currentPos;
    }
    return output;
};
