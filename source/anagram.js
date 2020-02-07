
/**
 * Принимает на вход массив слов и группирует
 * его на группы слов-анаграмм. Слова в группах,
 * как и сами группы, сортируются.
 *
 * @param {Array} input - массив строк
 * @returns {Array} Сгруппированные массивы слов анаграмм
 */
const anagram = (input) => {
  if (!Array.isArray(input) || input.length < 2) {
    return [];
  }

  const anagramObj = input.sort().reduce((obj, item) => {
    if (typeof item !== 'string') {
      return obj;
    }
    const sortedLetters = item.split('').sort().join('');

    if (sortedLetters in obj) {
      obj[sortedLetters].push(item);
    } else {
      obj[sortedLetters] = [item];
    }
    return obj;
  }, {});

  return Object.values(anagramObj).filter((item) => item.length > 1);
};
