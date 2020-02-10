'use strict';

const collator = new Intl.Collator();

let makeNewWord = (tmpArr, i, arrLength) => {
    tmpArr.sort(collator.compare);
    let tmpStr = tmpArr.join('');
    if (i != arrLength) { // Пробелы после каждого слова, кроме последнего
        tmpStr += " ";
    }
    tmpStr = tmpStr[0].toUpperCase() + tmpStr.slice(1).toLowerCase();
    return tmpStr;
}


let sort = (arr) => {
    let newArr = "";
    
    const tmpArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == " " || i == arr.length) {
            newArr += makeNewWord(tmpArr, i, arr.length);
            tmpArr.length = 0;
            continue; // Случай " " не записываем в tmpArr
        }
        tmpArr.push(arr[i]);
    }
    const result = newArr.split(' ');
    result.sort(collator.compare);
    return result.join(' ');
};