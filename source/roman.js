'use strict';

const SYMBOL_ROM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const SYMBOL_AR = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const roman = (number) => {

    if (/^[1-9]\d*$/.test(number)) {
        return (fromArabicToRoman(number));
    }

    if (/^[IVXLCDM]+$/i.test(number)) {
        return (fromRomanToArabic(number));
    }

    return;
};

const fromRomanToArabic = (number) => {

    let sym = 0;
    let res = 0;
    let index = SYMBOL_AR.length - 1;
    number = number.toUpperCase();

    while (
        sym < number.length &&
        ((index >= 0) || (index >= 0))    
    ) {
        if (number.substr(sym, SYMBOL_ROM[index].length) === SYMBOL_ROM[index]) {
            sym += SYMBOL_ROM[index].length;
            res += SYMBOL_AR[index];
        } else index--;
    }

    return res;
}

const fromArabicToRoman = (number) => {

    let res = '';
    let index = SYMBOL_AR.length - 1;

    while (number > 0) {
        if (
            (number > SYMBOL_AR[index]) ||
            (number == SYMBOL_AR[index])
        ) {
            res += SYMBOL_ROM[index];
            number -= SYMBOL_AR[index];
        } else index--;
    }

    return res;
}
