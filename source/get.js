'use strict';

function get(object, properties_string) {
    let properties = properties_string.split('.');

    let result = object;
    for (let property of properties) {
        if (result === undefined) {
            return undefined;
        }

        if (property === "") {
            continue;
        }

        result = result[property];
    }

    return result;
}