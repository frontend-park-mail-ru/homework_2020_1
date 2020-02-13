'use strict';

/**
 * Get an object and path to the object's property and make some prechecks
 * to be sure in object and path states and their correctness
 *
 * @author Sergey Malyshev
 * @see https://stackoverflow.com/a/32108184
 * @param {object} object - An object param
 * @param {string} objectPropPath - A path to the object's property
 * @returns {boolean} Boolean state of object and path
 *
 * @example
 *
 *  isCorrectInput({
        foo: 'bar',
        deep: {
            hested: {
                field: 'baz'
            }
        }
    }, '.foo')
 */

const isCorrectInput = (object, objectPropPath) => {
    return typeof objectPropPath === 'string' &&
    objectPropPath.startsWith('.') &&
    object && object.constructor === Object;
}

/**
 * Get an object and path to the object's property and return its value
 * (or undefined if property doesn't exist)
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

const get = (object, objectPropPath) => {
    if (!isCorrectInput(object, objectPropPath)) {
        return undefined;
    }
    return objectPropPath.split('.')
        .slice(1)
        .reduce((nestedObject, propPath) => {
                if (nestedObject) {
                switch (true) {
                    case propPath === '':
                        return object;
                    case (nestedObject.constructor === Object):
                    case (nestedObject.constructor === Array):
                    case (nestedObject.constructor === String):
                        return nestedObject[propPath];
                }
            }
        }, object);
}
