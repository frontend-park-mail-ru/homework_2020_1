'use strict';

const UNICODE_SHIFT = 32;

const createRegStr = () => {
    let regStr = '([A]){2,}|([a]){2,}';

    for (let i = 'B'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i) {
        regStr += `|([${String.fromCharCode(i)}]){2,}` +
                  `|([${String.fromCharCode(i + UNICODE_SHIFT)}]){2,}`;
    }
    return regStr;
};

const rle = (input) => {
    if (typeof input !== 'string') {
        return null;
    }

    const regStr = createRegStr();
    const regExp = new RegExp(regStr, 'g');

    return input.replace(regExp, (match) => {
        return match[0] + match.length;
    });
};
