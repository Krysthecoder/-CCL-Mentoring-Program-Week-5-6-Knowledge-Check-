//  Title:  Remove String Spaces
//  Link:   https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//  JS version

function noSpace(x) { return x.split(' ').join('') }

//  TS but at this point it is the same

export function noSpace(x: string): string {
    return x.replaceAll(" ", "")
}