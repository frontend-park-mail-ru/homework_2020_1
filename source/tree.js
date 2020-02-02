'use strict';

const tree = (height) => {
    const type = typeof height;
    if (type != 'number' && type != 'string') {
        return undefined;
    }
    const minHeight = 3;
    height = + height;
    if (!Number.isInteger(height) || height < minHeight) {
        return undefined;
    }

    let resultString = '';
    let levelWidth = 1;
    for (let i = 0; i != height - 1; i++) {
        const spacesString = ' '.repeat(height - i - 2);
        resultString += `${spacesString}${'*'.repeat(levelWidth)}${spacesString}\n`;
        levelWidth += 2;
    }
    const spacesString = ' '.repeat(height - 2);
    resultString += `${spacesString}|${spacesString}\n`;

    return resultString;
}
