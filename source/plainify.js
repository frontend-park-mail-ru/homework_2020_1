'use strict';

/**
 * @description Дополнительный метод для использования рекурсии
 * @param complexObject {Object} - входной "сложный" (со вложенными свойствами) объект
 * @param plainObject {Object} - результирующий объект (без вложенных)
 * @param parentProp {String} - имя свойства родителя (если текущий объект вложенный)
 */
const internalPlainify = (complexObject, plainObject, parentProp = '') => {
    for (const prop in complexObject) {
        const plainProp = parentProp !== '' ? parentProp + '.' + prop : prop;

        if (complexObject[prop] instanceof Object) {
            internalPlainify(complexObject[prop], plainObject, plainProp);
            continue;
        }

        plainObject[plainProp] = complexObject[prop];
    }
};

/**
 * @description Преобразует сложный объект со вложенными полями в простой (без вложенных)
 * @param complexObject {Object} - входной "сложный" (со вложенными свойствами) объект
 * @returns {Object}
 */
const plainify = complexObject => {
    const plainObject = {};

    if (!(complexObject instanceof Object)) {
        return plainObject;
    }

    internalPlainify(complexObject, plainObject);

    return plainObject;
};
