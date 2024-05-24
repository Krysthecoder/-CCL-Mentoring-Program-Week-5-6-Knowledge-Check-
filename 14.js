//  Title: Sum of odd numbers
//  Link:   https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript


function rowSumOddNumbers(n) {
    
    let row = []; // Create the main row container
    let indexRow = 0; // Initialized  the row index to be 0
    let colItem = 3;  // Initialized the second collumn items


    while (indexRow < n) {

        row.push([]) // Create a new row while the Row index is lower than the Rows (n) requested 
        indexRow++ //  Add 1 to our Row index

    }


    row[0].push(1) //  Initialized the array, pushing 1 as the first value of the row #1



    for (let i = 1; i < row.length; i++) { // Iterate each list starting at second item

        while (row[i - 1].length >= row[i].length) { // Check that the previous list[index] has more content that the current list[index]

            row[i].push(colItem); //  Push the Columns index into the current list[index]
            colItem = colItem + 2; //  Add 2 to the collumn item  so it jumps to another odd number

        }

    }

    return row[n - 1].reduce((accum, added) => accum + added) // Return the summ of the last index of the list

}

rowSumOddNumbers(5)//, 74088);
