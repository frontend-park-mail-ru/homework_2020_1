'use strict';

/**
 * Функция проверяет, является ли тип элемента объектом.
 * @param checkValue - проверяемый элемент
 * @return {Boolean} - true , если checkValue - объект, false  в противоположном случае.
 */

const isObject = (checkValue) => {
    return String(checkValue) === '[object Object]';
};



/**
 * Возвращает объект, созданный из полей других объектов
 * возвращаемый объект содержит уникальные поля всех объектов,
 * которые мы передаём в качестве
 * аргументов функции.
 *
 * Если у нескольких аргументов есть одинаковые поля - в качестве результата
 * будет первое поле.
 *
 * Если не передано никаких объект-аргументов в функцию - возвращается "пустой" объект
 *
 * @param args - остаточные параметры, в которые и передаются объекты
 * @return {object} - возвращаемый "уникальный объект".
 */

const zip = (...args) => {
    return args.reduce((accumulator, object) => {
            if (isObject(object)) {
                for (const [key, value] of Object.entries(object)) {
                    if (!accumulator.hasOwnProperty(key)) {
                        accumulator[key] = value;
                    }
                }
            }
            return accumulator;
        }, {});
};
