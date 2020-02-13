'use strict';

/**
 * Get an object and path to the object's property and return its value (or undefined if property doesn't exist)
 *
 * @author Sergey Malyshev
 * @see https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
 * @see https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
 * @param {object} object - An object param
 * @param {string} objectPropPath - A path to the object's property
 * @returns {(string|undefined)} Object's property value
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
    typeof objectPropPath === 'string' && objectPropPath.startsWith('.') && typeof object === 'object' ?
        objectPropPath.split('.')
            .slice(1)
            .reduce((nestedObject, propPath) => {
                if (nestedObject && nestedObject[propPath]) return nestedObject[propPath];
                else if (!propPath) return object;
                else return undefined;
            }, object)
        : undefined;
