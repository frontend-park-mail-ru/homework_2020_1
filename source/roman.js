'use strict';

const SYMBOL_ROM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const SYMBOL_AR = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/** @description Переводит арабские числа в римские и обратно.
 * @param number Число в римской или арабской системе счисления.
 * @returns {(number|string|undefined)} 
 */
const roman = (number) => {
    if (/^[1-9]\d*$/.test(number)) {
        return fromArabicToRoman(number);
    }

    if (/^[IVXLCDM]+$/i.test(number)) {
        return fromRomanToArabic(number);
    }

    return;
};


/** @description Переводит римские числа в арабские.
 * @param {string} number Число в римской системе счисления.
 * @return {number} 
 */
const fromRomanToArabic = (number) => {
    let sym = 0;
    let index = SYMBOL_AR.length - 1;
    number = number.toUpperCase();

    return SYMBOL_ROM.reduceRight((interimResult, current, index) => {
        let mult = 0;
        while (number.substr(sym, SYMBOL_ROM[index].length) === current) {
            mult++;
            sym += current.length;
        }

        return (mult > 0) ? (interimResult + SYMBOL_AR[index] * mult) : interimResult;
    }, 0);
}

/** @description Переводит арабские числа в римские.
 * @param {number} number Число в арабской системе счисления.
 * @return {string} 
 */
const fromArabicToRoman = (number) => {
    return SYMBOL_AR.reduceRight((interimResult, current, index) => {
        if (number >= current) {
            let mult = Math.floor(number / current);
            number -= current * mult;

            return interimResult + SYMBOL_ROM[index].repeat(mult);
        } else {
            return interimResult;
        }
    }, '');
}
