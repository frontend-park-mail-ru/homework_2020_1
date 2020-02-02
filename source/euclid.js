'use strict';

// gcd = GreatestCommonDivisor
const gcdOfPair = (firstNum, secondNum) => {
    if (firstNum === 0 && secondNum === 0) {
         return undefined;
    }

    firstNum = Math.abs(firstNum);
    secondNum = Math.abs(secondNum);

    let temp = 0;

    while (secondNum > 0) {
        temp = firstNum % secondNum;
        firstNum = secondNum;
        secondNum = temp;
    }

    return firstNum;
};

function euclid() {
    let allZeroCheck = true;

    for (let number of arguments) {
        if (number !== 0) {
            allZeroCheck = false;
            break;
        }
    }

    if (allZeroCheck) {
        return undefined;
    }

    let stack = Array.from(arguments);

    while (stack.length !== 1) {
        let gcdValue = gcdOfPair(stack.pop(), stack.pop());

        if (gcdValue === 1) {
            return 1;
        }

        if (gcdValue === undefined) {
            continue;
        }

        stack.push(gcdValue);
    }

    return stack.pop();
}