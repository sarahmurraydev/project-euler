/*
PROBLEM 5

2520 is the smallest number that can be divided by each of the 
numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?

*/


function xIsDivisibleByN(x, n){
    if( x % n === 0) return true;
    else false;
}

function alwaysDivisibleUnderK(k){
    // finds smallest number that is divisible by every integer under K
    // ex. if k=3, would return 6 which is divisible by 3, 2, and 1

    // we start with the LCM of all numbers under k 
    // since this number is definitely divisible by all integers under k
    // and we want to check if any other number SMALLER than this is

    // first we need to create the LCM. 
    // We need to find the product of k * (k-1) * ... * 1 
    // we use a for loop:
    let lcm = 1; 
    for(let i=k; i>0; i--){
        lcm = lcm * i; 
    }

    let num = lcm;
    // next we use a while loop to check if the LCM is divisible by 1, 2 ... , k 
    while (num > 0) {
        // check if num is divisble by 1 to k 
        for(let j=k; j>0; j--){
            if(xIsDivisibleByN(num, k)) true // we're good 
            else {
                // there is a number from 1 ... k that doesn't evenly divide NUM
                // so, we need to move on the next num
                j=0; 
            }
        }
        // the number we're on isn't divisble by 1 to k so move on to the next lowest number
        num--;
    }

}

alwaysDivisibleUnderK(3) // expected: 6 (3*2*1)
alwaysDivisibleUnderK(6) // 6, 5, 4, 3, 2, 1 -- number will be under 300 (LCM)
alwaysDivisibleUnderK(10) // 2520 



/* 
    Here's the solution without comments so that we see the code 
    clearly. 
*/ 



function xIsDivisibleByN(x, n){
    if( x % n === 0) return true;
    else false;
}

function alwaysDivisibleUnderK(k){
    let lcm = 1; 
    for(let i=k; i>0; i--){
        lcm = lcm * i; 
    }

    let num = 2;
    while (num < lcm) {
        //console.log("we are on number", num)
        let j=k;
        while(j>0){
            //console.log("we are checking if num %i is divisible by %i", num, j)
            if(j === 1) return num 
            else if(!xIsDivisibleByN(num, j)) {
                //console.log("number %i is not divisible by number %i", num, j)
                j = 0
            }
            else j--
        }

        num++;
    }

    return lcm;

}
