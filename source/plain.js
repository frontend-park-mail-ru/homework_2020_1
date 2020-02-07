/**
 *
 * @param {Array} inputArray
 * @param {Array} outputArray
 * @returns {Array}
 */

const plain = (inputArray, outputArray = []) =>  {
	if (!Array.isArray(inputArray)) {
		return [];
	}
	inputArray.forEach((element) => {
		if (Array.isArray(element)) {
			plain(element,outputArray);
		} else {
			outputArray.push(element);
		}
	});
	return outputArray;
};


