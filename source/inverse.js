const inverse = function (array, count = 0) {
    if (count >= 0) {
        return array.slice(0,count).concat(array.slice(count).reverse())
    }
    if (count < 0) {
        return array.slice(0, array.length  + count).reverse().concat(array.slice(array.length  + count))
    }
};
