'use strict';

/**
 * @description Сортирует массив по указанным полям
 * @param arr - массив для сортировки
 * @param keys - поля сортировки
 * @returns {undefined|object}
 * @author Вячеслав Романов
 */

const sorting = (arr, keys) => {
  if (!Array.isArray(arr) || !Array.isArray(keys)) {
    return; 
  }

  const reserveKeys = keys.reverse();
  for (let value of reserveKeys) {
    arr.sort((a, b) => {
    if (a[value] < b[value]) {
      return -1;
    }
    return 0;
    })
  }

  return arr;
}