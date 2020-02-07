'use strict';

const filter = (htmlString, ...tags) => {
    // htmlString.replace(/<[^>]*>?/gm, '');
    htmlString = htmlString//.replace(/<[^>]*>/g, '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/<(?!.*>)/g, '&lt;')
        .replace(/(?![^<].*>)>/g, '&gt;');
    return htmlString;
};

