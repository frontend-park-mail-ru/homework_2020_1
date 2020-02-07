/**
 *
 * @param {Array} inputArray
 * @returns {Array}
 */

const plain = (inputArray) =>  {
	if (!Array.isArray(inputArray)) {
		return [];
	}
	let outputArray = [];
	inputArray.forEach(element => {
		if (Array.isArray(element)) {
			innerPlain(element, outputArray);
		} else {
			outputArray.push(element);
		}
	});
	return outputArray;
};

/**
 *
 * @param inputArray
 * @param outputArray
 */

const innerPlain = (inputArray, outputArray) => {
	inputArray.forEach(element => {
		if (Array.isArray(element)) {
			innerPlain(element, outputArray);
		} else {
			outputArray.push(element);
		}
	})
};

