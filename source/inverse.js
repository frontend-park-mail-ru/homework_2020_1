/**
 * @description Меняет порядок элементов в массиве на противоположный.
 * @param {Array} array  исходный массив
 * @param {number} count переставляются все элементы массива кроме count
 * первых. Если число отрицательное — то на месте остаются элементы в конце массива.
 * @return {Array, undefined} преобразованный массив при корректных входных данных
 * undefined при некорректных входных данных
 */

const inverse = (array = [], count = 0) => {
    if (!Array.isArray(array) || !Number.isInteger(count))
        return undefined;
    if (count >= 0) {
        return array.slice(0,count)
            .concat(array.slice(count).reverse())
    }
    if (count < 0) {
        return array.slice(0, array.length  + count).reverse()
            .concat(array.slice(array.length  + count))
    }
};

