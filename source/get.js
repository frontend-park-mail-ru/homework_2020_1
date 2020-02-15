'use strict';

const OBJECT_TYPES = [
    'object',
    'array',
    'string'
];

/**
 * Provide access to undefiened value
 *
 * @author Sergey Malyshev
 * @returns {undefined}
 *
 * @example
 *
 *  noop()
 */
const noop = () => void 0;

/**
 * Get an object and path to the object's property and make some prechecks
 * to be sure in object and path states and their correctness
 *
 * @author Sergey Malyshev
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
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
    return (object ?? false) && 
                OBJECT_TYPES.some(objectType => typeof object === objectType) &&
                typeof objectPropPath === 'string' &&
                objectPropPath.startsWith('.');
}

/**
 * Get a nested object and key to the object's property and make some prechecks
 * to be sure in object and property existing and their correctness
 *
 * @author Sergey Malyshev
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * @param {object} nestedObject - An object param
 * @param {string} objectProp - A key to the object's property
 * @returns {boolean} Boolean state of object and path
 *
 * @example
 *
 *  isCorrectNest({
        foo: 'bar',
        deep: {
            hested: {
                field: 'baz'
            }
        }
    }, '.foo')
 */
const isCorrectNest = (nestedObject, objectProp) => {
    return (nestedObject ?? false) &&
            OBJECT_TYPES.some(objectType => typeof nestedObject === objectType) && 
            nestedObject.hasOwnProperty(objectProp);
}

/**
 * Get an object and path to the object's property and return its value
 * (or undefined if property doesn't exist)
 *
 * @author Sergey Malyshev
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
        return noop();
    }
    return objectPropPath.split('.')
        .slice(1)
        .reduce((nestedObject, propPath) => {
                switch (true) {
                    case (propPath === ''):
                        return object;
                    case (isCorrectNest(nestedObject, propPath)):
                        return nestedObject[propPath];
                    default:
                        return noop();
                }
        }, object);
}
