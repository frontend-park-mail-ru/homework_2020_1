'use strict';

const HTML_ESCAPES = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    '<': '&lt;',
    '>': '&gt;'
};

/**
 * Custom error class for filter function
 */
class CustomError {

    /**
     * Set error message
     * @param {string} message
     * @constructor
     */
    constructor(message) {
        this.message = message;
    }

    /**
     * Get error message
     * @returns {string}
     */
    what() {
        return this.message;
    }
}

/**
 * Function returns parsed string by tags that user set in brackets
 * @param {string} htmlString - html string that you wanna change
 * @param {array} tags - array of allowed tags
 * @returns {string} - parsed string
 */
const filter = (htmlString, tags) => {
    if (typeof htmlString !== 'string' || !Array.isArray(tags)) {
        throw new CustomError('Type Error');
    }

    const allowedTags = tags.filter(tag => typeof tag === 'string');

    htmlString = htmlString.replace(/<[^<>]+>|[&"']/g, (match) => {
        const strictTag = match.replace(/[<>/]/g, '');
        if (!allowedTags.includes(strictTag)) {
            match = match.replace(/[&"']/g, (match) => HTML_ESCAPES[match]);
            match = match.replace('<', HTML_ESCAPES['<']);
            match = match.replace('>', HTML_ESCAPES['>']);
        }
        return match;
    }).replace(/<(?![^<]*>)/g, '&lt;');

    let counter = 0;
    return htmlString.split('').reduce((string, symbol) => {
        if (string[0] === '<') {
            ++counter;
        }
        switch (symbol) {
            case '<': {
                ++counter;
                break;
            }
            case '>' && counter === 0: {
                symbol = symbol.replace('>', HTML_ESCAPES['>']);
                break;
            }
            case '>': {
                --counter;
                break;
            }
        }
        // if (symbol === '<') {
        //     ++counter;
        // } else if (symbol === '>' && counter === 0) {
        //     symbol = symbol.replace('>', HTML_ESCAPES['>']);
        // } else if (symbol === '>') {
        //     --counter;
        // }
        return string + symbol;
    });
};
