"use strict";

function chess(n) {
    if(n <= 1) {
        return null;
    }
    let result = "";
    for(let i=1; i<=n; i++) {
        for(let j=0; j<n; j++) {
            result += (( (i+j)%2 ) ? "*": " ");
        }
        result += "\n";
    }
    return result;
}
