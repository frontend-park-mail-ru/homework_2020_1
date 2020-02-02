'use strict';

const dangerous = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const analyseTag = tag => {
    let res = '';
    for (let j of tag) {
        if (j in dangerous) {
            res += dangerous[j];
        } else {
            res += j;
        }
    }
    return res;
}

const filter = (text, allowed) => {
    let res = '';
    let lt = false;
    let c = false;
    let tag = '';
    for (let i = 0; i < text.length; i++) {
        if (lt) {
            if (text[i] == '>') {
                lt = false;
                if (allowed.indexOf(tag) != -1 ) {
                    res += '<' + (c ? '/' : '') + tag + '>';
                } else {
                    res += dangerous['<'] + (c ? '/' : '') + analyseTag(tag) + dangerous['>'];
                }
                tag = '';
            } else {
                tag += text[i];
            }
        } else {
            if (text[i] == '<') {
                lt = true;
                tag = '';
                if (i + 1 < text.length) {
                    if (text[i + 1] == '/') {
                        i++;
                        c = true;
                    } else {
                        c = false;
                    }
                }
            } else if (text[i] in dangerous) {
                res += dangerous[text[i]];
            } else {
                res += text[i];
            }
        }
    }
    if (tag != '') {
        res += dangerous['<'] + analyseTag(tag);
    }
    return res;
};
