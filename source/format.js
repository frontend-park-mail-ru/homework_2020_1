'use strict';

/**
 *  Функция форматирует переданные целые числа в несколько колонок.
 *  Числа в получившейся таблице должны идти слева направо, сверху вниз.
 *
 * @param {number|...number} data - целое число или массив целых чисел
 * @param {number} columnsCount - количество колонок для отформатированного вывода
 * @returns {string|null}
 */

const format = (data, columnsCount) => {

    if (Array.isArray(data) && (('number' !== typeof columnsCount || data.some(i => !Number.isInteger(parseInt(i))))
        || (data.some(i => Number(parseFloat(i)) && Number(parseFloat(i)) % 1 !== 0)))) {
        return undefined;
    } else if ('number' === typeof data) {
        return data.toString();
    }

    let result = String();
    let columnSize = Array(columnsCount).fill(0);

    for (let i = 0; i < data.length; i++) {
        columnSize[i % columnsCount] = Math.max(columnSize[i % columnsCount], data[i].toString().length);
    }

    for (let i = 0; i < data.length; i++) {
        if (i !== 0) {
            result += (i % columnsCount === 0) ? '\n' : ' ';
        }
        result += data[i].toString().padStart(columnSize[(i % columnsCount)]);
    }

    return result;
};

