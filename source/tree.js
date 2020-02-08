'use strict';

let tree = (lvl) => {

    if (!(/\d+/.test(lvl))) {
        return null
    }


    if (lvl < 3) {
        return null;
    }

    let star = 1;
    const maxlen = 2 * (lvl - 2) + 1;
    let stringTree = ' '.repeat((maxlen - star) / 2) + '*' + ' '.repeat((maxlen - star) / 2) + '\n';

    for (let i = 0; i < lvl - 2; i++) {
        star = star + 2;
        stringTree += ' '.repeat((maxlen - star) / 2) + '*'.repeat(parseInt(star))
            + ' '.repeat((maxlen - star) / 2) + '\n';

    }

    stringTree += ' '.repeat((maxlen - 1) / 2) + '|' + ' '.repeat((maxlen - 1) / 2) + '\n';
    return stringTree;
};

