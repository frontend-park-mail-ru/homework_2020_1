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
    const number = typeof inputData === "number" ? inputData : Number(inputData);
    let output = '';

    if (number < MIN_BOARD_SIZE || isNaN(number)) {
        return undefined;
    }

    const repeatSize = Math.floor(number / 2) + 1;
    const positionForSlice = number % 2 - 2;
    for (let i = 0; i < number; i++) {
        output += (i % 2 ? ' *' : '* ').repeat(repeatSize).slice(0, positionForSlice) + '\n';
    }

    return output;
};

