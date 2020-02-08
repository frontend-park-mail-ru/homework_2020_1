/** @description Drawing a beautiful fir-tree.Final picture dependent on number of tree levels
 * @param {number} quantity of tree levels.
 * @return {string} well drawn tree that consists of star symbols and pipe symbol as trunk
 */

'use strict';

const tree = (lvl) => {
    if (!(/\d+/.test(lvl))) {
        return null
    }

    if (lvl < 3) {
        return null;
    }

    const MAXLENGTH = 2 * (lvl - 2) + 1;
    let star = 1;
    let stringTree = '*'.padStart((MAXLENGTH - star) / 2 + star).padEnd((MAXLENGTH - star) + star) + '\n';

    for (let i = 0; i < lvl - 2; i++) {
        star += 2;
        stringTree += '*'.repeat(star).padStart((MAXLENGTH - star) / 2 + star).padEnd((MAXLENGTH - star) + star) + '\n';
    }

    stringTree += '|'.padStart((MAXLENGTH - 1) / 2 + 1).padEnd((MAXLENGTH - 1) + 1) + '\n';
    return stringTree;
};