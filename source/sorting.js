'use strict';

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

  var sortArr = arr;
  keys.reverse().forEach(value =>
    sortArr.sort((a, b) => {
	  return (a[value] < b[value]) ? -1 : 0;
    })
  );

  return sortArr;
};
