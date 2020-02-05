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

    if (Array.isArray(data) &&(('number' !== typeof columnsCount || data.some(i => !Number.isInteger(parseInt(i))))
        || ( data.some(i => Number(parseFloat(i)) && Number(parseFloat(i)) % 1 !== 0)))) {
        return null;
    } else if ('number' === typeof data) {
        return data.toString();
    }
    let result = String();
    let columnSize = Array(columnsCount).fill(0);

    for (let i = 0, j = 0; i < data.length; i++, j++) {
        if (j === columnsCount) {
            j = 0;
        }
        let elementLength = data[i].toString().length;
        columnSize[j] = (columnSize[j] < elementLength ? elementLength : columnSize[j]); //сохранение максимальной длины
    }
    for (let i = 0, x = 0; i < data.length; i++) { // x - по колонкам  i - по входным данным
        if (x === columnsCount) {
            x = 0;
            result += '\n';
        }
        result += data[i].toString().padStart(columnSize[x++]);
        if (columnsCount > 1 && x !== columnsCount && i + 1 !== data.length) { // между колонками должен быть пробел
            result += ' ';
        }
    }

    return result;
};

