'use strict'

const NUMBERS = {
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
};

const ROMAN_NUMBERS = {
  1 : 'I',
  5 : 'V',
  10 : 'X',
  50 : 'L',
  100 : 'C',
  500 : 'D',
  1000 : 'M',
};

const DIGITS = Object.keys(NUMBERS);

const roman = roman => {
  const isNumeric = Number.isInteger(roman) || /^\d+$/.test(roman);
  
  if (!isNumeric) {
    
    if ( !/^[iIvVxXlLcCdDmM]+$/.test(roman) ) {
      throw new Error(`Roman digits are I, V, X, L, C, D, M`);
    }
    
    return roman
      .toUpperCase()
      .split('')
      .reduce( ( prev, el, ind, str ) => (
        // True in case of IX = -1 + 10, IL = -1 + 50, etc.
        DIGITS.indexOf(el) < DIGITS.indexOf(str[ ind + 1 ]) ?
          prev - NUMBERS[el] : prev + NUMBERS[el]
      ), 0);
    
  } else {
    roman = Number(roman);
    let res = '';
    // https://en.wikipedia.org/wiki/Roman_numerals
    // The largest number that can be represented in this notation is 3,999
    // (3,000 + 900 + 90 + 9 = MMM + CM + XC + IX = MMMCMXCIX)
    if (roman < 0 || roman > 3999)
      throw new Error(`Roman Number's are in range from 0 to 3999`);
    
    while (roman > 0) {
      // Determine Base
      const base = roman <= 9 ? 1 :
                   roman <= 99 ? 10 :
                   roman <= 999 ? 100 :
                   roman <= 3999 ? 1000 : null; // won't be null.
      
      if (roman >= 9 * base) {
        // IX, LM, etc
        res += ROMAN_NUMBERS[base] + ROMAN_NUMBERS[base * 10];
        roman -= 9 * base;
      } else if (roman >= 5 * base) {
        // V, L, D
        res += ROMAN_NUMBERS[base * 5];
        roman -= 5 * base;
      } else if (roman >= 4 * base) {
        // IV, XL, CD
        res += ROMAN_NUMBERS[base] + ROMAN_NUMBERS[base * 5];
        roman -= 4 * base;
      }
      
      while (roman >= base) {
        res += ROMAN_NUMBERS[base];
        roman -= base;
      }
    }
    return res;
  }
};
