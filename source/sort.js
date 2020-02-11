'use strict';

const collator = new Intl.Collator();


const makeNewWord = (currentValue) => {
    const arrayOfSymbols = currentValue.split('');
    arrayOfSymbols.sort(collator.compare);
    let tmpStr = arrayOfSymbols.join('');
    tmpStr = tmpStr[0].toUpperCase() + tmpStr.slice(1).toLowerCase();
    return tmpStr;
}


const sort = (str) => {
    const newArr = str.split(' ').map(makeNewWord);
    newArr.sort(collator.compare);
    return(newArr.join(' '));
};
