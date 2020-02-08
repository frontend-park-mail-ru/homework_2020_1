'use strict';

const WRONG_PARAMS = 'wrong parameters';
const INVALID_EXPR = 'invalid expression';


const solve = (expr, value) => {
    if (typeof expr !== 'string' || typeof value !== 'number') {
        throw new TypeError(WRONG_PARAMS);
    }

    if (!/^[\d+\-*()x ]+$/.test(expr)) {
        throw new SyntaxError(INVALID_EXPR);
    }

    if (/(x *){2,}/.test(expr) || /([+\-*] *){2,}/.test(expr) || /(\d+ *){2,}/.test(expr)) {
        throw new SyntaxError(INVALID_EXPR);
    }

    return new Function('x', `return ${expr}`)(value);
};
