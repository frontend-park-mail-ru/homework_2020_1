'use strict';

const collator = new Intl.Collator();

const localeCompare = (a, b) => collator.compare(a, b);

const sortWord = str => str.toLocaleLowerCase().split('').sort(localeCompare).join('');

const toUpCaseFirst = str => str.charAt(0).toLocaleUpperCase() + str.slice(1);

const makeWord = str => toUpCaseFirst(sortWord(str));

const sort = str => str.split(' ').map(makeWord).sort(localeCompare).join(' ');
