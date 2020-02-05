'use strict';

const dangerous = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const replaceDangerousSymbols = tag => {
    let result = '';
    for (let j of tag) {
        if (j in dangerous) {
            result += dangerous[j];
        } else {
            result += j;
        }
    }
    return result;
}

const tagFinished = (tag, closingTag, allowed) => {
    if (allowed.indexOf(tag) != -1) {
        return '<' + (closingTag ? '/' : '') + tag + '>';
    } else {
        return replaceDangerousSymbols('<' + (closingTag ? '/' : '') + tag + '>');
    }
}

/**
 * Заменяет "опасные" символы в исходном тексте
 * знаки '<' и '>' обрамляющие разрешённые теги не заменяются
 *
 * @param {string} text - Исходный текст
 * @param {array of strings} allowed - Массив разрешённых тегов
 * @returns  {string}
 */
const filter = (text, allowed) => {
    let result = '';
    let tagMet = false;
    let closingTag = false;
    let tag = '';
    for (let i = 0; i < text.length; i++) {
        if (tagMet) {
            if (text[i] === '>') {
                tagMet = false;
                result += tagFinished(tag, closingTag, allowed);
                tag = '';
            } else if (text[i] !== '/') {
                tag += text[i];
            }
        } else {
            if (text[i] === '<') {
                tagMet = true;
                tag = '';
                closingTag = (i + 1 < text.length) && (text[i + 1] === '/');
            } else {
                result += replaceDangerousSymbols(text[i]);
            }
        }
    }
    if (tag !== '') {
        result += dangerous['<'] + replaceDangerousSymbols(tag);
    }
    return result;
}
