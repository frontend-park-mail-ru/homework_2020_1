'use strict';

/**
 * устанавливает значение value в object свойству по пути path
 *
 * @param   {Object}   object - изменяемый объект
 * @param   {String[]} path - путь
 * @param   {Object}   value - значение
 * @returns {Object} - копия измененного обЪекта
 */

function pathSet(object, path, value) {
    if (path.length === 0) {
        return object;
    }

    let root = path[0];

    if (path.length === 1) {
        object[root] = value;
    } else {
        object[root] = pathSet(object[root] ? object[root] : {},
                                path.slice(1, path.length), value);
    }

    return object;
}

/**
 * устанавливает значение value в object в поле field
 *
 * @param   {Object} object - изменяемый объект
 * @param   {String} field - поле
 * @param   {Object} value - значение
 * @returns {Object} - копия измененного обЪекта
 */

const set = (object, field, value) =>
    pathSet(object, field.split('.').slice(1, field.length), value);