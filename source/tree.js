'use strict';

const tree = (lvl) => {
    if (!(/\d+/.test(lvl))) {
        return null
    }

    if (lvl < 3) {
        return null;
    }

    let star = 1;
    const maxlen = 2 * (lvl - 2) + 1;
    let stringTree = '*'.padStart((maxlen - star) / 2 + star).padEnd((maxlen - star) + star) + '\n';

    for (let i = 0; i < lvl - 2; i++) {
        star += 2;
        stringTree += '*'.repeat(star).padStart((maxlen - star) / 2 + star).padEnd((maxlen - star) + star) + '\n';
    }

    stringTree += '|'.padStart((maxlen - 1) / 2 + 1).padEnd((maxlen - 1) + 1) + '\n';
    console.log(stringTree);
    return stringTree;
};

tree("7");
