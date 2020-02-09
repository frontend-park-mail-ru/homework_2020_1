'use strict';

const max = numbers => Math.max(...numbers);

function sort(arr){
    let newArr = ""
    let collator = new Intl.Collator();

    let tmpArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] == " " || i == arr.length){
            tmpArr.sort(function(a, b) {
                return collator.compare(a, b);
            });
            let tmpStr = tmpArr.join('') + ' ';
            tmpStr = tmpStr[0].toUpperCase() + tmpStr.slice(1).toLowerCase();
            newArr += tmpStr;
            tmpArr.length = 0;
            continue;
        }
        tmpArr.push(arr[i]);
    }
    newArr = newArr.slice(0, -1);
    let result = newArr.split(' ');
    result.sort(function(a, b) {
        return collator.compare(a, b);
    });
    return result.join(' ');
}


