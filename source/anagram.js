
const anagram = (input) => {
  if (!Array.isArray(input) || input.length < 2) return [];

  const anagramObj = input.sort().reduce((obj, item) => {
  // Пропускаем элемент неподходящего типа
    if (typeof item !== 'string') return obj;
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
