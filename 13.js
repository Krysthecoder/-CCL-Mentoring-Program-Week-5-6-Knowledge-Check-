//  Title:  Vowel Count
//  Link:   https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    str = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++
        }
    }
    return counter
}