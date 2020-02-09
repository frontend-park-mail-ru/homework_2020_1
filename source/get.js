'use strict';

/**
 * Get an object and path to the object's property and return its value (or undefined if property doesn't exist)
 *
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

const get = (object, prop) => {
    let res_prop = prop.split('.');
    res_prop.shift();

    let get_res = (p, o) =>
        p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : (!x) ? o : undefined, o);

    return get_res(res_prop, object);
}

