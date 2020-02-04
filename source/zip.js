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
 * @param {...args} - остаточные параметры, в которые и передаются объекты
 * @return {retObject} - возвращаемый "уникальный объект".
 */

const zip = function uniqueElementsFromAllObjects(...args) {

    if (args.length === 0)
        return {};

    let retObject = new Map();


    args.forEach((object) => {

        if(typeof(object) == "object")
        {
            for (let key in object) {

                if (!retObject.has(key) && object.hasOwnProperty(key)) {
                    retObject.set(key, object[key]);
                }

            }
        }

    });

    console.log(Object.fromEntries(retObject));


    return Object.fromEntries(retObject);

};