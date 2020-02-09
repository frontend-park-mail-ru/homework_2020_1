'use strict';

const WRONG_PARAMS = 'wrong parameters';
const INVALID_EXPR = 'invalid expression';


/**
 * Calculates the value of a math expression depending on the variable x.
 * @param {String} expr - Math expression
 * @param {Number} value - Value of the variable x
 * @returns {Number} Calculated value
 * @throws {TypeError} The types of the parameters are wrong.
 * @throws {SyntaxError} The expression is invalid.
 */
const solve = (expr, value) => {
    if (typeof expr !== 'string' || typeof value !== 'number') {
        throw new TypeError(WRONG_PARAMS);
    }

    if (/(x *){2,}/.test(expr) || /([+\-*] *){2,}/.test(expr) || /(\d+\b *){2,}/.test(expr)) {
        throw new SyntaxError(INVALID_EXPR);
    }

    const postfixNotation = createPostfixNotation(expr.split('x').join(value));
    if (postfixNotation === null) {
        throw new SyntaxError(INVALID_EXPR);
    }

    const result = evaluatePostfixExpr(postfixNotation);
    if (result === null) {
        throw new SyntaxError(INVALID_EXPR);
    }
    return result;
};


/**
 * Converts an infix math expression to the postfix expression.
 * @param {String} expr - Math expression
 * @returns {Array|null} Postfix notation or null if math expression is invalid
 */
const createPostfixNotation = (expr) => {
    expr = expr.split(' ').join('');
    let postfixNotation = [];
    let operatorsStack = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] >= '0' && expr[i] <= '9') {
            const number = expr.slice(i).match(/\d+/);
            postfixNotation.push(Number(number));
            i += number[0].length - 1;
            continue;
        }

        switch (expr[i]) {
            case '-':
                if (i === 0 || expr[i - 1] === '(') {
                    postfixNotation.push(0);
                    operatorsStack.push('-');
                    break;
                }
            case '+':
                while (operatorsStack.length && operatorsStack[operatorsStack.length - 1] === '*') {
                    postfixNotation.push(operatorsStack.pop());
                }
                operatorsStack.push(expr[i]);
                break;
            case '*':
            case '(':
                operatorsStack.push(expr[i]);
                break;
            case ')':
                while (operatorsStack.length && operatorsStack[operatorsStack.length - 1] !== '(') {
                    postfixNotation.push(operatorsStack.pop());
                }
                if (operatorsStack.length === 0) {
                    return null;
                }

                operatorsStack.pop();
                break;
            default:
                return null;
        }
    }

    while (operatorsStack.length) {
        postfixNotation.push(operatorsStack.pop());
    }

    return postfixNotation;
};


/**
 * Evaluates postfix expression.
 * @param {Array} expr - Postfix expression
 * @returns {Number|null} Result of evaluation or null if the expression has mistakes
 */
const evaluatePostfixExpr = (expr) => {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y
    };

    const operandsStack = expr.reduce((stack, current) => {
        if (typeof current === 'number') {
            stack.push(current);
            return stack;
        }

        if (stack.length < 2) {
            return null;
        }

        const [y, x] = [stack.pop(), stack.pop()];
        stack.push(operators[current](x, y));
        return stack;
    }, []);

    if (operandsStack.length !== 1) {
        return null;
    }

    return operandsStack[0];
};
