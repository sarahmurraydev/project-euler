/*
PROBLEM 1:

If we list all the natural numbers below 10 that are multiples of 
3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function xisMultipleOf(x, n){
    if(x % n === 0) return true;
    else return false;
}

xisMultipleOf(9, 5) // false
xisMultipleOf(9, 3) // true
xisMultipleOf(10, 5) // true 
xisMultipleOf(740, 5) // true
xisMultipleOf(800, 3) // false
xisMultipleOf(270, 3) // true

function multiplesUnderY(y){
    // find all the multiples of a number under Y 
    let sum = 0;
    let i = y-1; // we want the count UNDER y
    while (i > 0) {
        if(xisMultipleOf(i, 5) || xisMultipleOf(i, 3)) {
            sum += i
        }
        i--;
    }
    return sum
}


// tests
multiplesUnderY(10) // expected: 23
multiplesUnderY(30) // expected: 195  (the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20 21, 24, 25 27)
multiplesUnderY(1000) // ANSWER: 233168