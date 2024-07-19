"use strict";

export default function stringToNumber(data) {
    let num = Number(data);
    if(isNaN(num)) {
        return 0;
    } else {
        return num;
    }
}