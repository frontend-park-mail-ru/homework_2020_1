'use strict';

/**
 * Function returns parsed string by tags that user set in brackets
 * @param {string} htmlString - html string that you wanna change
 * @param {array} tags - array of allowed tags
 * @returns {string} - parsed string
 */
const filter = (htmlString, ...tags) => {
    const htmlEscapes = {
        '&': '&amp;',
        '"': '&quot;',
        '\'': '&#39;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return htmlString.replace(/[&"']/g, (match, position) => {
        return htmlEscapes[match];
    }).replace(/<[^>]+>/g, (match, position) => {
        const copy = match.replace(/[<>/]/g, '');
        console.log(match, position);
        if (tags[0].indexOf(copy) === -1) {
            match = match.replace('<', htmlEscapes['<']);
            match = match.replace('>', htmlEscapes['>']);
        }
        return match;
    }).replace(/<(?!.*>)/g, '&lt;');
};
