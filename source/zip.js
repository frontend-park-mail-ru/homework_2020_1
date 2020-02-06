'use strict';

/**
 * функция реализует проверку на объект.
 *
 * @param {object} obj - объект для проверки.
 * @returns {boolean|boolean} результат проверки.
 */
const isObject = (obj) => {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};

/**
 * функция реализует глубокое копирование объекта.
 *
 * @param {object} src - объект для копирования.
 * @returns {object} скопированный объект.
 */
const deepCopy = (src) => {
    const copyObjsMap = new Map();
    const objQueue = new Array(src);
    const needToUpdate = Symbol('needToUpdate');

    while (objQueue.length) {
        let partialCopy = {[needToUpdate]: Array()};
        const obj = objQueue.pop();
        copyObjsMap.set(obj, partialCopy);

        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (isObject(obj[prop])) {
                    if (copyObjsMap.has(obj[prop])) {
                        partialCopy[prop] = copyObjsMap.get(obj[prop]);
                    } else {
                        partialCopy[needToUpdate].push(Array(prop, obj[prop]));
                        objQueue.push(obj[prop]);
                    }
                } else {
                    partialCopy[prop] = obj[prop];
                }
            }
        }
    }

    for (let obj of copyObjsMap.values()) {
        for (const propPair of obj[needToUpdate]){
            obj[propPair[0]] = copyObjsMap.get(propPair[1]);
        }
        delete obj[needToUpdate];
    }

    return(copyObjsMap.get(src));
};

/**
 * Функция принимает на вход несколько объектов (любое количество),
 * и возвращает единственный объект, содержащий все поля из всех объектов.
 * Если одно и то же поле было в нескольких объектах, останется значение,
 * которое встретилось раньше.
 *
 * @param {...object} src - набор объектов.
 * @returns {object} полученный объект.
 */
const zip = (...src) => {
    let zipObj = {};
    Object.assign(zipObj, ...(src.reverse()));

    console.log(zipObj);
    return deepCopy(zipObj);
};    