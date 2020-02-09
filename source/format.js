'use strict';

/** Format an array to a table with columns.
 * @param {Array} input The array for format.
 * @param {number} collums A number of collums.
 * @return {string} Formatted string.
 */
const format = (input, collums) => {

	if ( typeof(collums) !== "number" || collums <= 0 || !Array.isArray(input)) {
		return '';
	}

	const widthOfCollums = getCollumsWidth(input, collums);

	return input.map( (item, index) => getIndent(widthOfCollums, index, collums, item.toString().length) + item + charAtEndOfLine(index, collums, input.length))
		.join('');
};

function getCollumsWidth(input, collums) {

	const isItemOfCollum = (inputIndex, collumIndex) => inputIndex % collums === collumIndex;

	const widthOfItem = (item, collumIndex) => item.toString().length + (collumIndex !== 0 ? 1 : 0);

	return input.slice(0, collums)
		.map( (_, collumIndex) => max(input.filter( (_, inputIndex) => isItemOfCollum(inputIndex, collumIndex))
			.map( item => widthOfItem(item, collumIndex) )));
}

function getIndent(widthOfCollums, index, collums, itemLength) {
	return ' '.repeat(widthOfCollums[index % collums] - itemLength);
}

function charAtEndOfLine(index, collums, inputLength) {
	return isEndOfLine(index, collums) && !isLast(index, inputLength) ? '\n' : '';
}

function isEndOfLine(index, collums) {
	return (index + 1) % collums === 0;
}

function isLast(index, inputLength) {
	return (index + 1) === inputLength;
}

