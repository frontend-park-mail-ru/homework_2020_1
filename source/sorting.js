'use strict';

/**
 * Устойчивая сортировка по свойствам.
 * Принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов
 *
 * @returns []
 * @param initial массив plain-объектов
 * @param properties массив имён свойств
 */
let sorting = (initial, properties) => {

    if (initial.constructor !== Array || properties.constructor !== Array) {
        throw Error("Некорректный тип входных данных");
    }

    if (properties.length === 0) return initial;

    properties.reverse().forEach((property) => {
        initial.sort( (first, second) => {
            return (first[property] <= second[property]) ? -1: 1;
        });
    });

    return initial;
};
