'use strict';

/** Format an array to a table with columns.
 * @param {Array} input The array for format.
 * @param {number} collums A number of collums.
 * @return {string} Formatted string.
 */
const format = (input, collums) => {
	if (collums <= 0 || !Array.isArray(input)) {
		return '';
	}

	const isItemOfCollum = (inputIndex, collumIndex) => inputIndex % collums === collumIndex;

	const widthOfItem = (item, collumIndex) => item.toString().length + (collumIndex !== 0 ? 1 : 0);

	const widthOfCollums = input.slice(0, collums)
		.map( (_, collumIndex) => max(input.filter( (_, inputIndex) => isItemOfCollum(inputIndex, collumIndex))
			.map( item => widthOfItem(item, collumIndex) )));

	const indent = (item, index) => ' '.repeat(widthOfCollums[index % collums] - item.toString().length);

	const isEndOfLine = index => (index + 1) % collums === 0;

	const isLast = index => (index + 1) === input.length;

	const charAtEndOfLine = index => isEndOfLine(index) && !isLast(index) ? '\n' : '';

	return input.map( (item, index) => indent(item, index) + item + charAtEndOfLine(index))
		.join('');
};