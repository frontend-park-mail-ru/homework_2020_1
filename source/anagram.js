'use strict';

/**
 * @description Возвращает список из групп слов-анаграмм
 * @param {Array} words - список слов
 * @returns {Array}
 */

const anagram = words => {
    let anagrams = {};

    words.forEach(item => {
        let sortedWord = item.toString().toLowerCase().split("").sort().join("");

        if (anagrams[sortedWord] === undefined) {
            anagrams[sortedWord] = [item]
        } else {
            anagrams[sortedWord].push(item);
        }
    });

    return Object.values(anagrams).filter(item => {
        return item.length > 1 ? item.sort() : false;
    }).sort();
};