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
    return str.split('').map(char => {
        return (char in dangerous ? dangerous[char] : char);
    }).join('');
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
    if (
        (typeof(text) !== 'string') ||
        ((!Array.isArray(allowed)) ||
        (allowed.filter(elem => {
            return typeof(elem) !== 'string';
        }).length !== 0))
    ) {
        return undefined;
    }
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== leftAngleBracket) {
            result += replaceDangerousSymbols(text[i]);
            continue;
        }
        let indexOfNextGt = text.slice(i, text.length).indexOf(rightAngleBracket);
        const tagClosing = (indexOfNextGt === -1 ? '' : rightAngleBracket);
        indexOfNextGt = (indexOfNextGt === -1 ? text.length : indexOfNextGt + i);
        const tag = text.slice(i + angleBracketLength, indexOfNextGt);
        const meaningPartOfClosingTag = tag.slice(1, tag.length);
        const tagIsAllowed = (
            (allowed.indexOf(tag) !== -1) || ((tag[0] === slash) &&
            (allowed.indexOf(meaningPartOfClosingTag) !== -1))
        )
        const newPartOfResultingText = leftAngleBracket + tag + tagClosing;
        result += (tagIsAllowed ? newPartOfResultingText : replaceDangerousSymbols(newPartOfResultingText));
        i += tag.length + angleBracketLength;
    }
    return result;
};
