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
  if (size <= minSize) {
    throw RangeError("Значение должно быть больше одного");
  }

  const isFloat = parseInt(size, 10) !== parseFloat(size);
  if (isFloat || isNaN(size)) {
    throw new TypeError("Значение должно быть целым числом");
  }

  const isOddSize = size % 2;
  const sizeHalf = size / 2;

  const oddLine =  '* '.repeat(sizeHalf).concat(isOddSize ? '*': '') + '\n';
  const evenLine = ' *'.repeat(sizeHalf).concat(isOddSize ? ' ': '') + '\n';

  return (oddLine + evenLine).repeat(sizeHalf).concat(isOddSize ? oddLine : '');
};
