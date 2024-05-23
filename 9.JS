//  Title:  Training JS #18: Methods of String object--concat() split() and its good friend join()
//  Link:   https://www.codewars.com/kata/57280481e8118511f7000ffa/javascript 

//this kata does not have version for TS

//  JS version

function splitAndMerge(string, separator) {
    string = string.split(' ');
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[i].split('').join(separator))
    }
    return result.join(' ')
}

//  JS Enhanced version

const splitAndMerge = (string, separator) => string.split(' ').map(elem => elem.split('').join(separator)).join(' ')
