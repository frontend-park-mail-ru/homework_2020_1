'use strict';

const collator = new Intl.Collator();

/**
 * Создаем новое слово и сортируем символы внутри него
 * 
 * @param {string} word - слово из массива str
 * @returns {string}
 */
const makeNewWord = (word) => {
    const symbols = word.split('');
    symbols.sort(collator.compare);
    const tmpStr = symbols.join('');
    return tmpStr[0].toUpperCase() + tmpStr.slice(1).toLowerCase();
}

/**
 * Сортируем буквы в словах по алфавиту, а потом получившиеся слова в предложении - тоже.
 * Первая буква каждого слова делается прописной, остальные строчными.
 * 
 * @param {string} str - входная строка слов
 * @returns {string}
 */
const sort = (str) => {
    if (typeof(str) != "string" || str === "") {
        return null;
    }
    const newArr = str.split(' ').map(makeNewWord);
    newArr.sort(collator.compare);
    return newArr.join(' ');
}
