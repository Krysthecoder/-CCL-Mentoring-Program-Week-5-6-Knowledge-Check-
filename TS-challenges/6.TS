//  Title: Convert a string to an array
//  Link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/javascript

//  JS version

const stringToArray = string => string.split(' ');

//  TS version 

export function stringToArray(s: string): string[] {
	return s.split(' ')
}