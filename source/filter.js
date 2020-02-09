'use strict';

const HTML_ESCAPES = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    '<': '&lt;',
    '>': '&gt;'
};

/**
 * Custom exception
 * @param {string} message - error message
 * @constructor
 */
function CustomError(message) {
    this.message = message;
}

/**
 * Convert exception to string
 * @returns {string}
 */
CustomError.prototype.toString = function () {
    return this.message;
};

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
            symbol = symbol.replace('>', HTML_ESCAPES['>'])
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
const filter = (htmlString, tags) => {
    if (typeof htmlString !== 'string') {
        throw new CustomError('Type Error');
    }
    
    let allowedTags = [];
    tags.forEach((tag, index, object) => {
        if (typeof tag === 'string') {
            allowedTags.push(tag);
        }
    });

    htmlString = htmlString.replace(/<[^<>]+>|[&"']/g, (match) => {
        const strictTag = match.replace(/[<>/]/g, '');
        if (!allowedTags.includes(strictTag)) {
            match = match.replace(/[&"']/g, (match) => {
                return HTML_ESCAPES[match];
            });
            match = match.replace('<', HTML_ESCAPES['<']);
            match = match.replace('>', HTML_ESCAPES['>']);
        }
        return match;
    }).replace(/<(?![^<]*>)/g, '&lt;');
    return removeExtraBrackets(htmlString);
};
