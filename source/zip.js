'use strict';

const zip = (...objects) => {
    const tempObj = {};

    objects.reverse().forEach((obj) => {
        if (Object.prototype.toString.call(obj) !== '[object Object]') {
            console.error('Invalid input type');
            return {};
        }
        for (let [key, value] of Object.entries(obj)) {
            if (Object.prototype.toString.call(value) === '[object Object]' &&
                Object.prototype.toString.call(tempObj[key]) === '[object Object]') {
                obj[key] = zip(value, tempObj[key]);
            }
        }

        Object.assign(tempObj, obj);
        try {
            Object.assign(tempObj, JSON.parse(JSON.stringify(obj)));
        } catch (e) {
            console.error('Failed to make deep copy, error:' + e);
        }
    });

    return tempObj;
};