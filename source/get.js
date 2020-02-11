'use strict';

/**
 * Check if first letter is '.' and next are alphabetic or numeric ones or nothing except '.'
 *
 * @const {RegExp[]}
 * @todo Improve the rule (maybe not to use RegExp?)
 */

const REGEX_ARR = [
    RegExp('[.]'),
    RegExp('^\.\w+'),
    RegExp('^\.\d+')
];

/**
 * Get an object and path to the object's property and return its value (or undefined if property doesn't exist)
 *
 * @author Sergey Malyshev
 * @see https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
 * @see https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
 * @param {object} object - An object param
 * @param {string} prop - A path to the object's property
 * @return {string} Object's property value
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

const get = (object, objectPropPath) =>
    REGEX_ARR.some(regex => regex.test(objectPropPath)) && Object.prototype.toString.call(object) === '[object Object]' ?
        objectPropPath.split('.')
            .slice(1)
            .reduce((nestedObject, propPath) => {
                if (nestedObject && nestedObject[propPath]) return nestedObject[propPath];
                else if (!propPath) return object;
                else return undefined;
            }, {...object})
        : undefined;
