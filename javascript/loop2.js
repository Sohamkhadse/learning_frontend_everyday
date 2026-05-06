// <-------------to give count of leap year ------------------------------>

let start = parseInt(window.prompt('enter start year'));
let end = parseInt(window.prompt('enter end year'));

let year = start;
let Count = 0;

while (year <= end) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            Count++;
        }
    } else if (year % 4 == 0) {
        Count++;
    }

    year++;
}

console.log("Total leap years:", Count);