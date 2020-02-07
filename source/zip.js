'use strict';

/**
 * Функция реализует проверку на объект.
 *
 * @param {object} obj - объект для проверки.
 * @returns {boolean|boolean} - результат проверки.
 */
const isObject = (obj) => {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};

/**
 * Функция реализует частичное копирования объекта.
 *
 * @param {object} obj - объект для частичного копирования
 * @returns {Object} частино скопированный объект
 */
const partialCopy = (obj) => {
    const needToUpdate = Symbol.for('needToUpdate');
    let partialObjCopy = {[needToUpdate]: Array()};

    for (let prop in obj) {
        if (isObject(obj[prop])) {
            partialObjCopy[needToUpdate].push(Array(prop, obj[prop]));
        } else {
            partialObjCopy[prop] = obj[prop];
        }
    }

    return (partialObjCopy);
};

/**
 * Функция реализует создание связей между частичными копиями.
 *
 * @param {Map} copyObjsMap - map содержащий данные (ключ, занчение),
 * где ключ - объект, а значение - это частичная копия этого объекта.
 */
const createObjectsConnections = (copyObjsMap) => {
    const needToUpdate = Symbol.for('needToUpdate');

    for (let obj of copyObjsMap.values()) {
        for (const propPair of obj[needToUpdate]) {
            obj[propPair[0]] = copyObjsMap.get(propPair[1]);
        }
        delete obj[needToUpdate];
    }
};

/**
 * Функция реализует глубокое копирование объекта.
 *
 * @param {object} src - объект для копирования.
 * @returns {object} скопированный объект.
 */
const deepCopy = (src) => {
    const copyObjsMap = new Map();
    const objQueue = new Array(src);
    const needToUpdate = Symbol.for('needToUpdate');

    while (objQueue.length) {
        const obj = objQueue.pop();
        let partialObjCopy = partialCopy(obj);
        copyObjsMap.set(obj, partialObjCopy);

        for (let propPair of partialObjCopy[needToUpdate]){
            if(!copyObjsMap.has(propPair[1])){
                objQueue.push(propPair[1]);
            }
        }
    }

    createObjectsConnections(copyObjsMap);
    return (copyObjsMap.get(src));
};

/**
 * Функция принимает на вход несколько объектов (любое количество),
 * и возвращает единственный объект, содержащий все поля из всех объектов.
 * Если одно и то же поле было в нескольких объектах, останется значение,
 * которое встретилось раньше.
 * Если встречаются невалидные данные, то выбрасывается исключение вида:
 * Invalid input type
 *
 * @param {...object} src - набор объектов.
 * @returns {object} полученный объект.
 */
const zip = (...src) => {
    src.forEach((obj) => {
        if (!isObject(obj)) {
            throw(new Error('Invalid input type'));
        }
    });

    let zipObj = {};
    Object.assign(zipObj, ...(src.reverse()));
    return deepCopy(zipObj);
};
