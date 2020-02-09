'use strict';

/**
 * Get an object and path to the object's property and return its value (or undefined if property doesn't exist)
 *
 * @author Sergey Malyshev
 * @see https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
 * @param {Object} object - An object param
 * @param {String} prop - A path to the object's property
 * @return {String} Object's property value
 *
 * @example
 *
 *  get({
        foo: 'bar',
        deep: {
            hested: {
                field: 'baz'
            }
        }
    }, '.foo')
 */

const get = (object, prop) => 
    prop.split('.')
        .slice(1)
        .reduce((subObject, propValue) => 
                    (subObject && subObject[propValue]) ? subObject[propValue] : (!propValue) ? object : undefined, 
                object);

