'use strict';


const zip = function uniqueElementsFromAllObjects(...args) {

    if (args.length === 0)
        return {};

    let retObject = new Map();

    args.forEach((object) => {

        for (let key in object) {

            if (!retObject.has(key) && object.hasOwnProperty(key)) {
                retObject.set(key, object[key]);
            }

        }

    });


    return Object.fromEntries(retObject);

};