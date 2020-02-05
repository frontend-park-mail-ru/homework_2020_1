'use strict';

/**
 * Возвращает шахматное поле.
 *
 * @param {string, number} size - Размер доски.
 * @return {string, undefined} строка с шахматным полем или undefined в
 * случае некоректных данных
 */
const chess = (size) => {
  const MIN_SIZE = 1;
  const isFloat = parseInt(size) !== parseFloat(size);
  if (size <= MIN_SIZE || isFloat || Array.isArray(size) || isNaN(size)) {
      return undefined;
  }

  const isOddSize = size % 2;

  let oddLine = '* ';
  let evenLine = ' *';
  oddLine = oddLine.repeat(size/2).concat(isOddSize ? '*': '') + '\n';
  evenLine = evenLine.repeat(size/2).concat(isOddSize ? ' ': '') + '\n';

  const result = oddLine + evenLine;

  oddLine = isOddSize ? oddLine : '';

  return result.repeat(size/2) + oddLine;
};
