'use strict';

const dangerous = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

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
}

const findTagEnd = (text, i) => {
    for (; i < text.length && text[i] !== '>'; i++);
    return i;
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
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            let tag = text.slice(i + '<'.length, findTagEnd(text, i));
            if (allowed.indexOf(tag) !== -1 || (tag[0] === '/' && allowed.indexOf(tag.slice(1, tag.length)) !== -1)) {
                result += '<' + tag + (tag.length + '>'.length < text.length - i ? '>' : '');
            } else {
                result += replaceDangerousSymbols('<' + tag + (tag.length + '>'.length < text.length - i ? '>' : ''));
            }
            i += tag.length + '>'.length;
        } else {
            result += replaceDangerousSymbols(text[i]);
        }
    }
    return result;
}
