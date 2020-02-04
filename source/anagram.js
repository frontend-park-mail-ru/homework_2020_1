'use strict';

const anagram = words => {
    let anagrams = {};

    for (let word of words) {
        let sortedWord = word.toLowerCase().split("").sort().join("");

        if (anagrams[sortedWord] != null) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word]
        }
    }

    let answer = [];

    for (let key in anagrams) {
        if (anagrams[key].length > 1) {
            answer.push(anagrams[key].sort());
        }
    }

    return answer.sort();
};