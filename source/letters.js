'use strict'

const letters = function(string, flag) {
    if (typeof flag === "undefined") {
        return string.split('').filter(function (value, index, string) {
            return string.lastIndexOf(value) === string.indexOf(value);
        } ).join(``)
    }
    else if (flag === true) {
        return string.split('').filter(function (value, index, string) {
            return (string.lastIndexOf(value) === string.indexOf(value)) || (string.indexOf(value) === index);
        } ).join(``)
    }
    else if (flag === false){
        return string.split('').filter(function (value, index, string) {
            return (string.lastIndexOf(value) === string.indexOf(value)) || (string.lastIndexOf(value) === index);
        } ).join(``)
    }
}
