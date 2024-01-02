// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest


// With distinct element from an array.
// Brute Force Approach 
function secondLarge(arr){
    let newArr = Array.from(new Set(arr));

    let sortedArr = newArr.sort((a,b)=>b-a);
    console.log(sortedArr);
    
    if (sortedArr.length >1) {
        return sortedArr[1];
    }
    return -1;
} 

let count =[2,7,6,9,-10,15,15];

console.log(secondLarge(count));

// optimized approach - with duplicates
function secondLargest(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLarge = Number.NEGATIVE_INFINITY;

    for (const val of arr) {
        if (val > largest) {
            secondLarge=largest;
            largest=val;            
        }
        if (val !=largest && val > secondLarge) {
            secondLarge=val;
        }
    }

    return secondLarge;

}

console.log(secondLargest(count));