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
        console.assert(false, "sorting(): arguments must be arrays");
        return [];
    }

    if (properties.length === 0) return initial;

    properties.reduceRight(  (prevVal, item) => {
        initial.sort( (first, second) => {
            return (first[item] <= second[item]) ? -1: 1;
        });
    }, [initial]);

    return initial;
};

