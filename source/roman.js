'use strict';

const SYMBOL_ROM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const SYMBOL_AR = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const roman = (number) => {
    let res = '';
    let index = SYMBOL_AR.length - 1;

    if (!isNaN(number)) {
        while (number > 0) {
            if (number >= SYMBOL_AR[index]) {
                res += SYMBOL_ROM[index];
                number -= SYMBOL_AR[index];
            } else index--;
        }
    }

    if (typeof (number) == 'string') {
        let sym = 0;

        res = 0;
        number = number.toUpperCase();

        while (
            index >= 0 &&
            sym < number.length
        ) {
            if (number.substr(sym, SYMBOL_ROM[index].length) === SYMBOL_ROM[index]) {
                sym += SYMBOL_ROM[index].length;
                res += SYMBOL_AR[index];
            } else index--;
        }
    }

    return res;
};