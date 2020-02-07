'use strict';

const dangerous = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const LtLength = 1; // '<'.length
const GtLength = 1; // '>'.length

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
        if (text[i] !== '<') {
            result += replaceDangerousSymbols(text[i]);
            continue;
        }
        let indexOfNextGt = text.slice(i, text.length).indexOf('>');
        if (indexOfNextGt === -1) {
            indexOfNextGt = text.length;
        } else {
            indexOfNextGt += i;
        }
        let tag = text.slice(i + LtLength, indexOfNextGt);
        let symbolsLeft = text.length - i;
        let tagIsClosed = tag.length + GtLength < symbolsLeft;
        let tagClosing = (tagIsClosed ? '>' : '');
        let meaningPartOfClosingTag = tag.slice(1, tag.length);
        if (
            (allowed.indexOf(tag) !== -1) || ((tag[0] === '/') &&
            (allowed.indexOf(meaningPartOfClosingTag) !== -1))
        ) {
            result += '<' + tag + tagClosing;
        } else {
            result += replaceDangerousSymbols('<' + tag + tagClosing);
        }
        i += tag.length + GtLength;
    }
    return result;
};
