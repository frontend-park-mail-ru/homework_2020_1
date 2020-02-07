'use strict';

/**
 * Устойчивая сортировка по свойствам.
 * Принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов
 *
 * @returns {Array}
 * @param {Array} initial - массив plain-объектов
 * @param {Array} properties - массив имён свойств
 */
let sorting = (initial, properties) => {

    if (initial.constructor !== Array || properties.constructor !== Array) {
        throw Error("Некорректный тип входных данных");
    }

    if (!properties.length) return initial;

    properties.reverse().forEach((property) => {
        initial.sort( (first, second) => {
            if (first[property] === undefined || second[property] === undefined) {
                throw Error("Сравнение с неопределенным занчением");
            }
            if (first[property] === second[property]) return 0;
            return (first[property] < second[property]) ? -1: 1;
        });

    }, initial);

    return initial;
};
