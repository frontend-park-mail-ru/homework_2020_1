"use strict";

const tree = (height) => {
    height = + height;
    if (height < 3) {
        return null;
    }

    let levelWidth = 2 * (height - 1) - 1;
    let resultString = "\n" + " ".repeat((levelWidth - 1) / 2) + "|" + " ".repeat((levelWidth - 1) / 2);
    for (let i = 0; i != height - 1; i++) {
        resultString += "\n" + " ".repeat(i) + "*".repeat(levelWidth) + " ".repeat(i);
        levelWidth -= 2;
    }
    return resultString.split("").reverse().join("");
}
