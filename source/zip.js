'use strict';

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

let zip = (...args) => {

    if (!args.length) {
        return {};
    }

    return Object.fromEntries(
        args.reduce((accumulator, object) => {
            if (typeof object == "object") {
                for (const [key, value] of Object.entries(object)) {
                    if (!accumulator.has(key)) {
                        accumulator.set(key, value);
                    }
                }
            }
            return accumulator;
        }, new Map())
    );

};
