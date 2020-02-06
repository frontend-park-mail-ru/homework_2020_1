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

  const sortArr = [...arr];
	
  sortArr.sort((a, b) => {
    var swap = false;
    for (let value of keys) {
      if (a[value] < b[value]) {
        swap = true;
        break;
      } else if (a[value] > b[value]) {
        break;
      }
    }
    return (swap) ? -1 : 0;
  });

  return sortArr;
};
