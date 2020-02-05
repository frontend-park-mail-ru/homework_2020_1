'use strict';

const plainify = (object) => {
    let res = {};
    if (typeof object != "object") {
        return res;
    }
    for (var key in object) {
        if (typeof object[key] != "object") {
           res[key] = object[key];
        } else {
            let tmp_object = plainify(object[key]);
            for (var tmp_key in tmp_object) {
                res[key + "." + tmp_key] = tmp_object[tmp_key];
            }
        }
    }
    return res;
}
