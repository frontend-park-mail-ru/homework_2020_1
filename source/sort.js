'use strict';

const collator = new Intl.Collator();

let makeNewWord = (tmpArr, i, strLength) => {
    tmpArr.sort(collator.compare);
    let tmpStr = tmpArr.join('');
    if (i != strLength) { // Пробелы после каждого слова, кроме последнего
        tmpStr += " ";
    }
    tmpStr = tmpStr[0].toUpperCase() + tmpStr.slice(1).toLowerCase();
    return tmpStr;
}


let sort = (str) => {
    let newStr = "";
    
    const tmpArr = [];
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == " " || i == str.length) {
            newStr += makeNewWord(tmpArr, i, str.length);
            tmpArr.length = 0;
            continue; // Случай " " не записываем в tmpArr
        }
        tmpArr.push(str[i]);
    }
    const result = newStr.split(' ');
    result.sort(collator.compare);
    return result.join(' ');
};