'use strict';

/**
 *  Функция форматирует переданные целые числа в несколько колонок.
 *  Числа в получившейся таблице должны идти слева направо, сверху вниз.
 *
 * @param {number|...number} data - целое число или массив целых чисел
 * @param {number} columnsCount - количество колонок для отформатированного вывода
 * @returns {string|undefined} - undefinded возвращается, если в качестве параметров поступают невалидные данные
 * (Строки без чисел , отрицательное количество колонок, специальные константы или нецелые числа
 */

const format = (data, columnsCount) => {

    if (!Array.isArray(data)) {
        data = [data];
    }

    if ((isNaN(Number(columnsCount)) || columnsCount < 1
        || data.some(elem => Number(parseFloat(elem)) % 1 !== 0 || isNaN(elem)))) {
        throw new TypeError()
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

