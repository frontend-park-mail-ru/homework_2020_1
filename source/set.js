/*
Постников Александр
Вариант-14
АПО-21
*/ 

/**
 * @description Функция установки значения в поле объекта, если
 *      поля не существует, то оно создается
 * @param {object} object - Объект, в которо устанавливается значение
 * @param {string} request - Строка, содержащая последовательность 
 *     полей внутренних объектов для добавления значения
 * @param {*} value - Значение, для установки в поле
 * @returns {object} - Объект с проделанными изменениями
 * @throws {TypeError} - Исключение проходит при передаче некорректного объекта
 *      или строки последовательности полей
 */

'use strict';

function set(object, request, value) {
    if (typeof(object) != "object" || object == null) {
        throw new TypeError(`Переданный параметр ${object} не является объектом`);
    }

    const fieldList = request.slice(1).split('.');
    if (fieldList.includes("")) {
        throw new TypeError('Переданная строка полей некорретна');
    }

    const fields = fieldList.slice(1);
    
    let prevField = object;
    let field = fields.reduce((field, f) => {
        if (!prevField[field] || !(f in prevField[field])) {
            if (Number(f) || f == "0") {
                prevField[field] = [];
            } else {
                prevField[field] = {};
            }
        } 
        prevField = prevField[field];
        return f;
    }, fieldList[0])

    prevField[field] = value;
    return object;
}