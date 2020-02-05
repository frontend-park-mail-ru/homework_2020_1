// Вариант 5
// Губанова Виктория
'use strict';

/**
 * @description Минимальный размер шахматной доски
 * @const {number}
 * @default
 */
const MIN_BOARD_SIZE = 2;

/**
 * @description Создание шахматной доски
 * @param {number} inputData - размер стороны доски
 * @returns {string} возвращает шахматную доску при вводе корректных данных (числа)
 * @returns {undefined} если на вход принимается число, меньше минимального размера доски или строка
 */
const chess = (inputData) => {
    let output = '';

    if ( isNaN(inputData = Number(inputData)) || inputData < MIN_BOARD_SIZE) {
        return undefined;
    }

    const repeatSize = Math.floor(inputData / 2) + 1;
    const positionForSlice = inputData % 2 - 2;
    for (let i = 0; i < inputData; i++) {
        output += (i % 2 ? ' *' : '* ').repeat(repeatSize).slice(0, positionForSlice) + '\n';
    }

    return output;
};

