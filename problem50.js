/*  
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

*/


// psuedo coding: 

/* 
 things we know: 
  
 the sum of primes is prime ? -> No 2+3+5 = 10 

 starting at the bottom means you have to go through all of the numbers

 we should start in the middle -- logically prove below this but:
    -> if N=100 
    -> if we start at 100 and make our way down we are wasting time checking half the numbers
    -> we want consecutive sums so we want:
        N1 + N2 + ... + Nm <= N 
        if we assume Ni = 51, then Nj = 53 
        but 51 + 53 = 104 </= 100 
        but looking at Ni = 47 (first prime under 50), and Nj=43
        43 + 47 = 100 so the logic holds
*/


/*
How to solve this? 
    -> loop through the numbers from 1 ... N and pull out all the primes into an array  // O(n)
    -> take those primes and start at the index of the first prime > N/2 (P1)
    -> let P2 = the prime under the 


    PROOF OF WHY WE CAN START AT pK = the first prime that is greater than N/2 
    p1 + p2 + ... pm < N
    N/2 < pk < N 
    let pj = pk + p0 // next highest prime 
    then pj > N/2
    so pk > N/2 and pj > N/2 
    so pk + pj > N/2 + N/2 = N 
    so we can start at pk but that would be the highest prime there is 
*/