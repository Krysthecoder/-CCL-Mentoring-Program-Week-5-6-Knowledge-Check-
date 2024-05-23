//  Title:  Sum of integers in string
//  Link:   https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(s) {
    s = s.replaceAll(']', " ");
    s = s.replaceAll(/[a-zA-Z!@#[\$:%\§^;\&,*\)?\(+=._-]/g, " ").split(' ');
    if (s.join('') === "") { return 0 }
    let numArr = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if ((s[i] * 1)) {
            numArr.push(s[i] * 1)
        }
    }
    return numArr.reduce((accum, currentVal) => accum + currentVal);
}