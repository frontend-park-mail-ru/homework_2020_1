'use strict';

const minmax = function (str) {
    let result = [undefined, undefined];

    if (typeof str === "string") {
        const elements = str.split(/[ ,]+/).map(el => parseFloat(el)).filter(el => (isNaN(el) === false));
        elements.forEach(el => {
            if (el < result[0] || result[0] === undefined)
                result[0] = el;
            if (el > result[1] || result[1] === undefined)
                result[1] = el;
        });
    }
    
    return result;
};