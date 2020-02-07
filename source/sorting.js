'use strict';

const isString = (element) => typeof element === 'string';

/**
 * @description Вычисляет разницу между двумя значениями
 * @param a - первое значение
 * @param b - второе значение
 * @returns {number}
 * @author Вячеслав Романов
 */

const getDiff = (a, b) => {
    if (isString(a) || isString(b)) {
      return a.localeCompare(b);
    }

    return a - b;
};

/**
 * @description Сравнивает два объекта по полям
 * @param a - первый объект для сравнения
 * @param b - второй объект для сравнения
 * @param keys - поля сортировки
 * @returns {number}
 * @author Вячеслав Романов
 */

const cmp = (a, b, keys) => {
  let diff; // Разница между двумя значениями объектов по одному полю

  /*
  Вычисляем разницу до тех пор,
  пока значения сходятся,
  либо пока не закончатся поля сравнения
  */
  keys.every((value) => {
    diff = getDiff(a[value], b[value]);
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
