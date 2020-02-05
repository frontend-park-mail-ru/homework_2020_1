'use strict';

const minmax = (str) => {
    const elements = str.split(/[ ,]+/).map(el => parseFloat(el)).filter(el => (isNaN(el) === false));
    return  elements.length === 0 ? [undefined, undefined] : [Math.min(...elements), Math.max(...elements)];
};