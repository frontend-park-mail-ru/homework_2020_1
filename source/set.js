'use strict';

function pathSet(object, path, value) {
    if (path.length === 0) {
        return object;
    }
    if (path.length === 1) {
        object[path[0]] = value;
    } else if (object[path[0]] != null) {
        object[path[0]] = pathSet(object[path[0]], path.slice(1, path.length), value);
    } else {
        object[path[0]] = pathSet({}, path.slice(1, path.length), value);
    }
    return object;
}

const set = (object, field, value) => pathSet(object, field.split('.').slice(1, field.length), value);