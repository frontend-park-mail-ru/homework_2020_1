'use strict';

/**
 * @description Возвращает список из групп слов-анаграмм
 * @param {Array} words - список слов
 * @returns {Array}
 */

const anagram = words => {
    if (!Array.isArray(words) || words.length === 0) {
        throw new Error('Wrong input');
    }

    if (words.some(elem => typeof elem !== 'string')) {
        throw new Error('Wrong input');
    }

    let anagrams = words.reduce((prev, cur) => {
        let sortedWord = cur.toLowerCase().split('').sort().join('');

        prev[sortedWord] ? prev[sortedWord].push(cur) : prev[sortedWord] = [cur];
        return prev;
    }, {});

    return Object.values(anagrams).filter(item => {
        return item.length > 1 ? item.sort() : false;
    }).sort();
};