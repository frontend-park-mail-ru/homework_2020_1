'use strict';

const zip = (...objects) => {
    const temp_obj = {};

    objects.reverse().forEach((obj) => {
        if (Object.prototype.toString.call(obj) !== '[object Object]') {
            return {};
        }
        for (let [key, value] of Object.entries(obj)) {
            if (Object.prototype.toString.call(value) === '[object Object]' &&
                Object.prototype.toString.call(temp_obj[key]) === '[object Object]') {
                obj[key] = zip(value, temp_obj[key]);
            }
        }

        Object.assign(temp_obj, obj);
        Object.assign(temp_obj, JSON.parse(JSON.stringify(obj)));
    });

    return temp_obj;
};