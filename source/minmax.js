'use strict';

/**
 * @description Поиск минимального и максимального числа в строке
 * @param inputString исходная строка
 * @returns {Array} первый элемент - минимум, второй элемент - максимум.
 */
const minmax = inputString => {
  if (typeof inputString !== 'string') {
      throw new Error('Некорректный тип входных данных');
  }

  const numbers = inputString.split(/[\s,;:]+/)
      .map(string => parseFloat(string))
      .filter(number => !isNaN(number));

  return numbers.length ? [ Math.min(...numbers), Math.max(...numbers) ] : [ undefined, undefined ];
};