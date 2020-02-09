'use strict';
/**
 * Вычислеяет результат арифметического выржаения
 *
 * @param {string} text - Входная строка, например x+(x+2)*3
 * @param {number} x - Значение входной переменной
 * @return {number} - Вычесленный результат
 */
const solve = (text, x) => {
    let str = text.replace(/[()+\-*]/g, ' ' + '$&' + ' ')
        .replace(/x/g, x)
        .split(' ')
        .filter(elem => elem !== "");

    const prior = {'+': 1, '-': 1, '*': 2};
    let stackNumbers = new Stack();//стек чисел
    let stackOperators = new Stack();//стек операций

    for (let i = 0; i < str.length; i++) {
        if (str[i].search(/^-?\d+$/) > -1)
            stackNumbers.push(parseInt(str[i]));//всегда пушим числа в первый стек
        else
            switch (str[i]) {
                case '(':
                    stackOperators.push(str[i]);//всегда пушим
                    break;
                case ')':
                    let topStackOperand = stackOperators.top();
                    if (topStackOperand === '(') {
                        stackOperators.pop();
                        break;
                    } else {
                        i--;//еще раз раасматриваем скобку
                        makeOperation(stackNumbers, stackOperators);
                    }
                    break;
                case '-':
                case '*':
                case '+':
                    if (stackOperators.is_empty() ||
                        stackOperators.top() === '(' || stackOperators.top() === ')'
                        || prior[str[i]] > prior[stackOperators.top()]) {//сравнили приоритет нашей хрени с приоритетом верхушки стека
                        stackOperators.push(str[i]);
                    } else { //тащим двух челов из стека и операцию к ним
                        i--;
                        makeOperation(stackNumbers, stackOperators)
                    }
                    break;
                default:
                    return 'Incorrect data';
            }
    }
    while (!stackOperators.is_empty()) {
        makeOperation(stackNumbers, stackOperators);
    }
    return stackNumbers.pop();
};

let makeOperation = (stackNumbers, stackOperators) => {
    let operand1 = stackNumbers.pop();
    let operand2 = stackNumbers.pop();
    switch (stackOperators.pop()) {
        case '+':
            stackNumbers.push(operand1 + operand2);
            break;
        case '-':
            stackNumbers.push(operand2 - operand1);
            break;
        case '*':
            stackNumbers.push(operand1 * operand2);
            break;
    }
};

function Stack() {
    this._size = 0;
    this._storage = {};
}

/**
 * Пушит объект в стек
 *
 * @param {data} data - Сам объект который хотим добавить
 */
Stack.prototype.push = function (data) {
    let size = ++this._size;
    this._storage[size] = data;
};
/**
 * Возвращает объект с верхушки стека и удаляет его оттуда
 *
 * @return  data - Вернет верх стека
 */
Stack.prototype.pop = function () {
    let size = this._size,
        deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deletedData;
    }
};
/**
 * Возвращает объект с верхушки стека
 *
 * @return  data - Вернет верх стека
 */
Stack.prototype.top = function () {
    return this._storage[this._size]
};
/**
 * Проверят стек на пустоту
 *
 * @return  boolean - true если пусто, иначе false
 */
Stack.prototype.is_empty = function () {
    return this._size === 0
};