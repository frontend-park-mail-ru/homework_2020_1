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
        return value;
    }

    let root = path[0];
    let nestedObject = object[root] ? object[root] : {};
    let pathWithoutRoot = path.slice(1, path.length);
    object[root] = pathSet(nestedObject, pathWithoutRoot, value);
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

function set (object, field, value) {
    if (typeof object !== Object || typeof field !== String) {
        throw new Error('Не верный тип данных');
    }
    let path = field.split('.').slice(1, field.length);
    return (field === '') ? object : pathSet(object, path, value);
}