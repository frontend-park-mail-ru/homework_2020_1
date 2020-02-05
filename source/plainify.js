'use strict';

/**
 * plainify получает на вход обычный объект в вложенными свойствами, а возвращает plain-объект
 *
 * @param object - обычный объект в вложенными свойствами
 * @returns {undefined|*} - plain-объект
 */

const plainify = (object) => {
    let res = {};
    if (typeof object !== 'object') {
        return res;
    }
    for (let key in object) {
        if (typeof object[key] !== 'object') {
           res[key] = object[key];
        } else {
            let tmpObject = plainify(object[key]);
            for (let tmpKey in tmpObject) {
                res[key + '.' + tmpKey] = tmpObject[tmpKey];
            }
        }
    }
    return res;
}
