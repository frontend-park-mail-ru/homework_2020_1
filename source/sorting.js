'use strict';

const isString = (element) => typeof element === 'string';

/**
 * @description Сравнивает два объекта по полям
 * @param a - первый объект для сравнения
 * @param b - второй объект для сравнения
 * @param keys - поля сортировки
 * @returns {number}
 * @author Вячеслав Романов
 */

const cmp = (a, b, keys) => {
  let diff = 0;
  keys.every((value) => {
    if (isString(a[value]) || isString(b[value])) {
      diff = a[value].localeCompare(b[value]);
    } else {
      diff = a[value] - b[value];
    }

    return !diff;
  });

  return diff;
};

/**
 * @description Сортирует массив по указанным полям
 * @param arr - массив для сортировки
 * @param keys - поля сортировки
 * @returns {object}
 * @throws {SyntaxError} arr and keys should be arrays
 * @author Вячеслав Романов
 */

const sorting = (arr, keys) => {
  if (!Array.isArray(arr) || !Array.isArray(keys)) {
    throw new SyntaxError('arr and keys should be arrays');
  }

  const sortArr = [...arr];
  sortArr.sort((a, b) => cmp(a, b, keys));

  return sortArr;
};
