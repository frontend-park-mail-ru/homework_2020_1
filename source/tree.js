'use strict';

function tree(lvl) {
    if ((lvl == 0) || (lvl == 1) || (lvl == 2)) {
        return null;
    }
    let star = 1;
    let maxlen = 2 * (lvl - 2) + 1;
    let derevo = ' '.repeat((maxlen - star) / 2) + '*' + ' '.repeat((maxlen - star) / 2) + '\n';
    for (let i = 0; i < lvl - 2; i++) {
        star = star + 2;
        derevo = derevo + ' '.repeat((maxlen - star) / 2) + '*'.repeat(parseInt(star))
            + ' '.repeat((maxlen - star) / 2) + '\n';
    }
    derevo = derevo + ' '.repeat((maxlen - 1) / 2) + '|' + ' '.repeat((maxlen - 1) / 2) + '\n';
    return derevo;
}