'use strict';

const chess = function (number) {
    if(number <= 1) return null;

    let output = "";
    for (let i = 0; i < number; i++)
    {
        output += (i % 2 ? ' *' : '* ').repeat(Math.floor(number / 2) + 1).slice(0, number % 2 - 2);
        output += "\n";
    }
    return output;
};