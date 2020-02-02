'use strict';

let UNICODE_SHIFT = 32;

function createRegStr() {
    let regStr = '([A]){2,}|([a]){2,}';

    for (let i = "B".charCodeAt(0); i <= "Z".charCodeAt(0); ++i) {
        regStr += `|([${String.fromCharCode(i)}]){2,}`;
        regStr += `|([${String.fromCharCode(i + UNICODE_SHIFT)}]){2,}`;
    }
    return regStr;
}

function rle(input){

    let regStr = createRegStr();

    let regExp = new RegExp(regStr, 'g');

    return input.replace(regExp, function (match) {
        return match[0] + match.length;
    });

}
