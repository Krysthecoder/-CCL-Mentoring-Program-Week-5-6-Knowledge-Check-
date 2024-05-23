//  Title:  Quarter of the year
//  Link:   https://www.codewars.com/kata/5ce9c1000bab0b001134f5af


//  First attempt

const quarterOf = (month) => {
    let monthGroups = {
        1: [1, 2, 3],
        2: [4, 5, 6],
        3: [7, 8, 9],
        4: [10, 11, 12]
    }
    if (monthGroups[1].includes(month)) {
        return 1
    } else if (monthGroups[2].includes(month)) {
        return 2
    } else if (monthGroups[3].includes(month)) {
        return 3
    } else {
        return 4
    }
}

//  Second attempt

const quarterOfOne = (month) => {

    let test = {
        1: [1, 2, 3],
        2: [4, 5, 6],
        3: [7, 8, 9],
        4: [10, 11, 12]
    }

    return test[1].includes(month) ? 1 : test[2].includes(month) ? 2 : test[3].includes(month) ? 3 : 4;

}

//  Third solution

const quarterOfThree = (month) => {

    let monthsGroup = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

    return parseInt(monthsGroup.map((elem) => elem.includes(month) ? monthsGroup.indexOf(elem) + 1 : null).join(''))

}
