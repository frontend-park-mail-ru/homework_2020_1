'use strict';

/**
 *  Функция форматирует переданные целые числа в несколько колонок.
 *  Числа в получившейся таблице должны идти слева направо, сверху вниз.
 *
 * @param {number|...number} data - целое число или массив целых чисел
 * @param {number} columnsCount - количество колонок для отформатированного вывода
 * @returns {string|undefined}
 */

const format = (data, columnsCount) => {

    if (Array.isArray(data) && ((isNaN(Number(columnsCount)) || columnsCount < 1
        || data.some(elem => (!Number.isInteger(parseInt(elem)) || (Number(parseFloat(elem)) % 1)))))) {
        return undefined;
    } else if (!isNaN(Number(data))) {
        return data.toString();
    }

    let result = '';
    let columnSize = Array(columnsCount).fill(0);

    for (let i = 0; i < data.length; i++) {
        const columnNumber = i % columnsCount;
        columnSize[columnNumber] = Math.max(columnSize[columnNumber], data[i].toString().length);
    }

    for (let i = 0; i < data.length; i++) {
        const columnNumber = i % columnsCount;
        result = result.concat(((!columnNumber && i) ? '\n' : ' '),
            data[i].toString().padStart(columnSize[columnNumber]));
    }

    return result.slice(1);
};

