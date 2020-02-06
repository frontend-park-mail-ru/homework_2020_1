'use strict';

function sorting(initial, properties) {

    if (properties.length === 0) return initial;

    for (let oneProperty of properties.reverse()) {
        initial.sort( (first, second) => {
            return (first[oneProperty] <= second[oneProperty]) ? -1: 1;
        });
    }

    return initial;
}