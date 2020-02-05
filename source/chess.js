'use strict';

/**
 * Возвращает шахматное поле.
 *
 * @param {string, number} size - Размер доски.
 * @return {string, undefined} строка с шахматным полем или undefined в
 * случае некоректных данных
 */
const chess = (size) => {
  const minSize = 1;
  const isFloat = parseInt(size) !== parseFloat(size);
  if (size <= minSize || isFloat || isNaN(size)) {
    return undefined;
  }

  const isOddSize = size % 2;
  const sizeHalf = size / 2;

  const oddLine =  '* '.repeat(sizeHalf).concat(isOddSize ? '*': '') + '\n';
  const evenLine = ' *'.repeat(sizeHalf).concat(isOddSize ? ' ': '') + '\n';

  return (oddLine + evenLine).repeat(sizeHalf).concat(isOddSize ? oddLine : '');
};
