//  Title:  Double Char
//  Link:   https://www.codewars.com/kata/56b1f01c247c01db92000076

//  JS version

function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++) {
        word = word + str[i] + str[i];
    };
    return word;
};

//  TS version

export function doubleChar(str: string): string {
    return str.split('').map(elem => elem + elem).join('');
};
