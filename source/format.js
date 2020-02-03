'use strict';
const format = (data, columnsCount) => {
    let result = '';
    let columns = [];
    let maxLenArr;

    for (let i = 0; i < columnsCount; i++) {
        columns[i] = [];
    }

    for (let i = 0, j = 0; i < data.length; i++, j++) {
        if (j === columnsCount) {
            j = 0;
        }
        columns[j].push(data[i]);
    }

    maxLenArr = getColumnsLength(...columns);

    for (let i = 0, x = 0, y = 0; i < data.length; i++) { // x - по столбцам, y - по строкам, i - по входным данным
        if (x === columnsCount) {
            y++;
            x = 0;
            result += '\n';
        }
        result += ' '.repeat(maxLenArr[x] - columns[x][y].toString().length);
        result += columns[x++][y].toString();
        if (columnsCount > 1 && x !== columnsCount && i + 1 !== data.length) { // между колонками должен быть пробел
            result += ' ';
        }
    }
    return result;
};

function getColumnsLength(...columns) { // находим ширину столбца для отформатированного вывода
    let result = [];
    for(let i = 0; i < columns.length; i++) {
        const minLen = Math.min(...columns[i]).toString().length; // длина строки с минимальным элементом
        const maxLen = Math.max(...columns[i]).toString().length; // длина строки с максимальным элементом
        result[i] = (minLen > maxLen) ? minLen : maxLen;       // длина строки i-го столбца
    }
    return result;
}
