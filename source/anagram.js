'use strict';

/**
 * @description Возвращает список из групп слов-анаграмм
 * @param {Array} words - список слов
 * @returns {Array}
 */

const anagram = words => {
    if (!Array.isArray(words)) {
        throw new Error('Wrong input');
    }

    let anagrams = words.reduce(function (prev, cur) {
        let sortedWord = cur.toString().toLowerCase().split('').sort().join('');

        prev[sortedWord] ? prev[sortedWord].push(cur) : prev[sortedWord] = [cur];
        return prev;
    }, {});

    return Object.values(anagrams).filter(item => {
        if (item.length > 1) {
            return item.sort();
        }
    }).sort();
};