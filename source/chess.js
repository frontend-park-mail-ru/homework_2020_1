'use strict';

/**
 * Возвращает шахматное поле.
 *
 * @param {string, number} size - Размер доски.
 * @return {string, null} строка с шахматным полем или null в
 * случае некоректных данных
 */
let chess = (size) => {
    const MIN_SIZE = 1;
    let isFloat = parseInt(size) !== parseFloat(size);
    if (size <= MIN_SIZE || isFloat || Array.isArray(size)) {
        return null;
    }

    let odd_line = '';
    let even_line = '';
    for (let j=0; j<size; j++) {
        let isOddLine = j%2;
        odd_line += isOddLine ? ' ': '*';
        even_line += !isOddLine ? ' ': '*';
    }
    odd_line += '\n';
    even_line += '\n';

    let result = odd_line + even_line;

    odd_line = size%2 ? odd_line : '';

    return result.repeat(size/2) + odd_line;
};
