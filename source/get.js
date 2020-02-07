'use strict';

const get = (object, prop) => {
    let res_prop = prop.split(".");
    res_prop.shift();

    let get_res = (p, o) =>
        p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : (!x) ? o : undefined, o);

    return get_res(res_prop, object);
}

