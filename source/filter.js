'use strict';

const filter = (htmlString, ...tags) => {
    // htmlString.replace(/<[^>]*>?/gm, '');
    htmlString = htmlString//.replace(/<[^>]*>/g, '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/<(?!.*>)/g, '&lt;')
        // .replace(/>/g, '&gt;');
    return htmlString;
};
//
// const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';
// const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';
// const output = filter(input, [ 'strong', 'em' ]);
// console.log(output);
//
const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';
const output = filter(input, [ 'strong', 'em' ]);
const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';
console.log(output);
