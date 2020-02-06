'use strict';

let solve = (expr, value) => eval(expr.split('x').join(value));
