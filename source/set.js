/*
Постников Александр
Вариант-14
АПО-21
*/ 

'use strict';

/**
 * @description Функция установки значения в поле объекта, если
 *      поля не существует, то оно создается
 * @param {object} object - Объект, в который устанавливается значение
 * @param {string} request - Строка, содержащая последовательность 
 *     полей внутренних объектов для добавления значения
 * @param {*} value - Значение, для установки в поле
 * @returns {object} Объект с проделанными изменениями
 * @throws {TypeError} - Исключение проходит при передаче некорректного объекта
 *      или строки последовательности полей
 */
function set(object, request, value) {
    if (typeof object != 'object' || 
        Array.isArray(object) || 
        object === null) {
        throw new TypeError(`Переданный параметр ${object} не является объектом`);
    }

    const fieldList = request.slice(1).split('.');
    if (fieldList.includes('')) {
        throw new TypeError('Переданная строка полей некорретна');
    }

    const valueField = fieldList.pop();
    
    let field = fieldList.reduce((prevField, field) => {
        if (!(field in prevField)) {
            prevField[field] = {};
        } 
        return prevField[field];
    }, object);

    field[valueField] = value;
    return object;
}
