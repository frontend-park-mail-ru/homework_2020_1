'use strict';

let SYMBOL_ROM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
let SYMBOL_AR = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const roman = function (number)
{
	let res;
	let n = SYMBOL_AR.length - 1;

	if (+number) {
		res = '';
		while (number > 0) {
			if (number >= SYMBOL_AR[n]) {
				res += SYMBOL_ROM[n];
				number -= SYMBOL_AR[n];
			}
			else n--;
		}
	}

	else {
		res = 0;
		let sym = 0;
		number = number.toUpperCase();
		while (n >= 0 && sym < number.length) {
			if (number.substr(sym, SYMBOL_ROM[n].length) == SYMBOL_ROM[n]) {
				sym += SYMBOL_ROM[n].length;
				res += SYMBOL_AR[n];
			}
			else n--;
		}
	}
	return res;
};
