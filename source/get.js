'use strict';


/**
 * This function is used to safely get object property.
 *
 * @param object - object you need to get property from
 * @param propertyString - same as what you would write after regular object ( e.g.'.foo.bar'), but it ignores
 * empty properties (e.g. '...foo..kek' == '.foo.kek')
 * @returns {undefined|*} - will return property on success, will return undefined in case property can not be found
 */
const get = (object, propertyString) => {
    if (typeof (object) !== 'object' || typeof (propertyString) !== 'string') {
        return undefined;
    }

    const properties = propertyString.split('.');

    let result = object;
    for (let property of properties) {
        // in case there can not be any property
        if (result === undefined || result === null) {
            return undefined;
        }

        // ignore empty properties
        if (property === '') {
            continue;
        }

        result = result[property];
    }

    return result;
};