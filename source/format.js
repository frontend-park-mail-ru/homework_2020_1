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

    if ('number' !== typeof data && Array.isArray(data)
        && ('number' !== typeof columnsCount || data.some(i => !Number.isInteger(parseInt(i))))
        || (Array.isArray(data) && data.some(i => Number(parseFloat(i)) && Number(parseFloat(i)) % 1 !== 0))) {
        return null;
    } else if ('number' === typeof data) {
        return data.toString();
    }

    let result = '';
    let columns = [];
    let maxLenArr = Array(columnsCount).fill(0);

    for (let i = 0, j = 0; i < data.length; i++, j++) {
        if (columns[j] === undefined) { //инициализация массива для новой колонки
            columns[j] = []
        }
        if (j === columnsCount) {
            j = 0;
        }
        columns[j].push(data[i]);
        let elementLength = data[i].toString().length;
        maxLenArr[j] = (maxLenArr[j] < elementLength ? elementLength : maxLenArr[j]); //сохранение максимальной длины
    }

    for (let i = 0, x = 0, y = 0; i < data.length; i++) { // x - по столбцам, y - по строкам, i - по входным данным
        if (x === columnsCount) {
            y++;
            x = 0;
            result += '\n';
        }
        result += ' '.repeat(maxLenArr[x] - columns[x][y].toString().length); // выравнивание чисел в колонке
        result += columns[x++][y].toString();
        if (columnsCount > 1 && x !== columnsCount && i + 1 !== data.length) { // между колонками должен быть пробел
            result += ' ';
        }
    }
    return result;
};

