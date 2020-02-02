'use strict';

const minmax = inputString => {
  if (typeof(inputString) !== 'string') {
    return 'Некорректный тип входных данных';
  }

  const numbers = inputString.split(' ')
      .map(string => parseFloat(string))
      .filter(number => !isNaN(number));

  return numbers.length ? [ Math.min(...numbers), Math.max(...numbers) ] : [ undefined, undefined ];
};