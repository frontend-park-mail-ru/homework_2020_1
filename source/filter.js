'use strict';

const dangerous = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const slash = '/';
const leftAngleBracket = '<';
const rightAngleBracket = '>';
const angleBracketLength = 1;

const replaceDangerousSymbols = str => {
    let result = '';
    for (let i of str) {
        if (i in dangerous) {
            result += dangerous[i];
        } else {
            result += i;
        }
    }
    return result;
};

/**
 * Заменяет "опасные" символы в исходном тексте
 * знаки '<' и '>' обрамляющие разрешённые теги не заменяются
 *
 * @param {string} text - Исходный текст
 * @param {string[]} allowed - Массив разрешённых тегов
 * @returns  {string}
 */
const filter = (text, allowed) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== leftAngleBracket) {
            result += replaceDangerousSymbols(text[i]);
            continue;
        }
        let indexOfNextGt = text.slice(i, text.length).indexOf(rightAngleBracket);
        let tagClosing;
        if (indexOfNextGt === -1) {
            indexOfNextGt = text.length;
            tagClosing = '';
        } else {
            indexOfNextGt += i;
            tagClosing = rightAngleBracket;
        }
        const tag = text.slice(i + angleBracketLength, indexOfNextGt);
        const meaningPartOfClosingTag = tag.slice(1, tag.length);
        const tagIsAllowed = (
            (allowed.indexOf(tag) !== -1) || ((tag[0] === slash) &&
            (allowed.indexOf(meaningPartOfClosingTag) !== -1))
        )
        const newPartOfResultingText = leftAngleBracket + tag + tagClosing;
        if (everythingIsGood) {
            result += newPartOfResultingText;
        } else {
            result += replaceDangerousSymbols(newPartOfResultingText);
        }
        i += tag.length + angleBracketLength;
    }
    return result;
};
