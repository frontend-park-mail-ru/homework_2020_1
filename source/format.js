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

	const width = input.slice(0, collums)
		.map(item => item.toString().length);
	for (let i = 0; i < collums; ++i) {
		for (let k = i; k < input.length; k += collums) {
			const tmp = input[k].toString().length;
			if (tmp >= width[i]) {
				width[i] = tmp + (i !== 0 ? 1 : 0);
			}
		}
	}

	const indent = (item, index) => {
		return ' '.repeat(width[index % collums] - item.toString().length);
	};

	const isEndOfLine = index => {
		return (index + 1) % collums === 0;
	};

	const isLast = index => {
		return (index + 1) === input.length;
	};

	const charAtEndOfLine = index => {
		return isEndOfLine(index) && !isLast(index) ? '\n' : '';
	};

	return input.map( (item, index) => indent(item, index) + item + charAtEndOfLine(index))
		.join('');
};
format()
//console.log(format([], 1))
