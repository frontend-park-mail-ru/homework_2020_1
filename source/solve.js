'use strict';

const solve = (expr, value) => {
    if (typeof expr !== 'string' || typeof value !== 'number') {
        return;
    }

    let doubleVariableExpr = /(x *){2,}/;
    if (doubleVariableExpr.test(expr)) {
        return;
    }

    let mathExpr = /^[\d+\-*()x ]+$/;
    if (!mathExpr.test(expr)) {
        return;
    }

    try {
        const calculateExpr = new Function('x', 'return ' + expr);
        return calculateExpr(value);
    } catch {}
};
