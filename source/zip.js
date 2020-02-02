'use strict';

const zip = (...objects) => {
    const obj = Object.assign({}, ...objects.reverse());
    return Object.assign(obj, ...objects.map(x => JSON.parse(JSON.stringify(x))));
};