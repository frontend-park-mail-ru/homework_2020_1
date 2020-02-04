'use strict';

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

const arabicToRoman = arabic => {
  
  let res = '';
  // https://en.wikipedia.org/wiki/Roman_numerals
  // The largest number that can be represented in this notation is 3,999
  // (3,000 + 900 + 90 + 9 = MMM + CM + XC + IX = MMMCMXCIX)
  if (arabic < 0 || arabic > 3999) {
    throw new Error(`Roman Number's are in range from 0 to 3999`);
  }
  
  while (arabic > 0) {
    // Determine Base
    const base = arabic <= 9 ? 1 :
                 arabic <= 99 ? 10 :
                 arabic <= 999 ? 100 :
                 arabic <= 3999 ? 1000 : null; // won't be null.
    
    switch ( true ) {
      case arabic >= 9 * base:
        // IX, LM, etc
        res += ROMAN_NUMBERS[base] + ROMAN_NUMBERS[base * 10];
        arabic -= 9 * base; break;
      case arabic >=5 * base:
        // V, L, D
        res += ROMAN_NUMBERS[base * 5];
        arabic -= 5 * base; break;
      case arabic >= 4 * base:
        // IV, XL, CD
        res += ROMAN_NUMBERS[base] + ROMAN_NUMBERS[base * 5];
        arabic -= 4 * base; break;
    }
    
    while (arabic >= base) {
      res += ROMAN_NUMBERS[base];
      arabic -= base;
    }
  }
  return res;
  
};

const romanToArabic = roman => (
  roman
    .toUpperCase()
    .split('')
    .reduce( ( prev, el, ind, str ) => (
      // True in case of IX = -1 + 10, IL = -1 + 50, etc.
      DIGITS.indexOf(el) < DIGITS.indexOf(str[ ind + 1 ]) ?
        prev - NUMBERS[el] : prev + NUMBERS[el]
    ), 0)
);

const isArabic = num => ( /^\d+$/.test(num) );
// Pretty rough check.
const isRoman = num => /^[IVXLCDM]+$/i.test( num );

const roman = num => {
  
  if( isRoman(num) ) return romanToArabic( num );
  if( isArabic(num) ) return arabicToRoman(  Number(num) );
  
  throw new Error(`
  Roman number's are in range from 0 to 3999.
  Arabic number's must be whole!`);
};
