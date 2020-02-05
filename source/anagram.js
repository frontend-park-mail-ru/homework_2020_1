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

    let anagrams = {};

    words.forEach(item => {
        let sortedWord = item.toString().toLowerCase().split('').sort().join('');

        anagrams[sortedWord] ? anagrams[sortedWord].push(item) : anagrams[sortedWord] = [item];
    });

    return Object.values(anagrams).filter(item => {
        if (item.length > 1) {
            return item.sort();
        }
    }).sort();
};