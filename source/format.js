'use strict';

const format = (input, collums) => {
	if (collums <= 0) {
		return '';
	}

	let width = input.slice(0, collums).map(item => item.toString().length);
	for (let i = 0; i < collums; ++i) {
		for (let k = i; k < input.length; k += collums) {
			let tmp = input[k].toString().length;
			if (tmp >= width[i]) width[i] = tmp + (i != 0 ? 1 : 0);
		}
	}

	return input.map( (item, index) => ' '.repeat(width[index % collums] - item.toString().length) + item).
		reduce( (sum, current, ind) => sum + ( (ind % collums == 0) && (ind != 0) ? '\n' : '' ) + current , '');
};