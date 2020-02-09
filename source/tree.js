'use strict';

/** @description Drawing a beautiful fir-tree.Final picture dependent on number of tree levels
 * @param {number} lvl- quantity of tree levels.Also it can be a number in string representation.
 * @return {(string|null)} well drawn tree that consists of star symbols and pipe symbol as trunk
 */

const tree = (lvl) => {
    if (!(/\d+/.test(lvl))) {
        return null
    }

    if (lvl < 3) {
        return null;
    }

    const MAXLENGTH = 2 * (lvl - 2) + 1;
    let star = 1;

    return new Array(parseInt(lvl)).fill(' '.repeat(MAXLENGTH)).reduce(
        (resTree, item, index, array) => {
            if (index === lvl - 1) {
                item = item.slice(0, (MAXLENGTH - 1) / 2) + '|' + item.slice(0, (MAXLENGTH - 1) / 2);
            } else {
                item = item.slice(0, (MAXLENGTH - star) / 2) + '*'.repeat(star) + item.slice(0, (MAXLENGTH - star) / 2);
            }
            star += 2;
            return resTree + item.toString() + '\n';
        }, '');
};
