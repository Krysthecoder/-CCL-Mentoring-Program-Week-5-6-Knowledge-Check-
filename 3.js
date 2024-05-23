//  Title: Convert boolean values to strings 'Yes' or 'No'.
//  Link:  https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript?filter=me&sort=best_practice&invalids=false

const boolToWord = bool => bool === true ? 'Yes' : 'No'

//  TypeScrips works the same, so there is no worth on creating a new file for it

export const boolToWord2 = (bool: boolean): string => {
    return bool ? 'Yes' : 'No';
};