'use strict';

/**
 * plainify получает на вход обычный объект c вложенными свойствами, а возвращает plain-объект
 *
 * @param object - обычный объект в вложенными свойствами
 * @returns {undefined|*} - plain-объект
 */

const plainify = (object) => {
    let res = {};
    if (typeof object !== 'object') {
        return res;
    }
    for (const key in object) {
        if (typeof object[key] !== 'object') {
           res[key] = object[key];
        } else {
            const tmpObject = plainify(object[key]);
            for (const tmpKey in tmpObject) {
                res[key + '.' + tmpKey] = tmpObject[tmpKey];
            }
        }
    }
    return res;
}
