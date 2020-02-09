'use strict';

/** @description Drawing a beautiful fir-tree.Final picture dependent on number of tree levels
 * @param {number} lvl- quantity of tree levels.
 * @return {string} well drawn tree that consists of star symbols and pipe symbol as trunk
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

    //foreach way

    // let treeArr = new Array( parseInt(lvl)).fill(' '.repeat(MAXLENGTH)).forEach(function (item, index, array) {
    //     if (index === lvl - 1) {
    //         item = item.slice(0, (MAXLENGTH - 1) / 2) + '|' + item.slice(0, (MAXLENGTH - 1) / 2);
    //     } else {
    //         item = item.slice(0, (MAXLENGTH - star) / 2) + '*'.repeat(star) + item.slice(0, (MAXLENGTH - star) / 2);
    //     }
    //     star += 2;
    //     resTree += item.toString() + '\n';
    // });
    // console.log(resTree);
    // return resTree;

    //reduce way
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
