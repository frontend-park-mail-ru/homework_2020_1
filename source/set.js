/*
Постников Александр
Вариант-14
АПО-21
*/ 

'use strict';

function set(object, request, value) {
    if (typeof(object) != "object" || object == null)
        return undefined;

    let fields = request.slice(1).split('.');
    
    let field = object;
    for (let f of fields.slice(0, fields.length - 1)) {
        if (f === "" || Number(f) < 0)
            return undefined;

        if (!(f in field)) {
            if (Number(f))
                field[f] = []
            else
                field[f] = {}
        }

        field = field[f];
    }

    field[fields[fields.length - 1]] = value;
    return object;
}