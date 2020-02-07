'use strict';

const htmlEscapes = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    '<': '&lt;',
    '>': '&gt;'
};

/**
 * Get object type
 * @param obj - object
 * @returns {string} - result type
 */
const toType = obj => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

/**
 * Escape right brackets in string
 * @param {string} string - html string
 * @returns {string} - parsed string
 */
const removeExtraBrackets = (string) => {
    let counter = 0;
    let output = '';
    for (let symbol of string) {
        if (symbol === '<') {
            ++counter;
        } else if (symbol === '>' && counter === 0) {
            symbol = symbol.replace('>', htmlEscapes['>'])
        } else if (symbol === '>') {
            --counter;
        }
        output += symbol;
    }
    return output;
};

/**
 * Function returns parsed string by tags that user set in brackets
 * @param {string} htmlString - html string that you wanna change
 * @param {array} tags - array of allowed tags
 * @returns {string} - parsed string
 */
const filter = (htmlString, ...tags) => {
    if (toType(htmlString) !== 'string') {
        return '';
    }
    tags.forEach((set) => {
        set.forEach((tag, index, object) => {
            if (toType(tag) !== 'string') {
                object.splice(index, 1);
            }
        });
    });

    htmlString = htmlString.replace(/[&"']/g, (match, position) => {
        return htmlEscapes[match];
    }).replace(/<[^<>]+>/g, (match, position) => {
        const copy = match.replace(/[<>/]/g, '');
        if (tags[0].indexOf(copy) === -1) {
            match = match.replace('<', htmlEscapes['<']);
            match = match.replace('>', htmlEscapes['>']);
        }
        return match;
    }).replace(/<(?![^<]*>)/g, '&lt;');
    return removeExtraBrackets(htmlString);
};
