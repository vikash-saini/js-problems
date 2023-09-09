// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// 1. N is an integer within the range [1..100,000];
// 2. each element of array A is an integer within the range [−1,000,000..1,000,000].

function getSmallestPositive(arr) {
  // find max value from the arr
  let maxval = Math.max(...arr);

  // if max value is negative or zero return 1
  if (maxval <= 0) {
    return 1;
  } else {
    // get the range of array from 0 to max val
    let newArr = Array.from({ length: maxval + 1 }, (val, i) => i);
   //[0, 1, 2, 3, …]

    // exclude 0 since we needs to check only greater than 0 values
    let excludeZero = newArr.filter((val) => val > 0);
   //[1, 2, 3, …]

    // check for absent val from the given arr compareing with excludeZero
    for (let val of excludeZero.values()) {
      // return the value which is not present in given arr else check for other value
      if (!arr.includes(val)) {
        return val;
      }
      continue;
    }

    //return maximum + 1 integer value if above conditons fails
    return maxval + 1;
  }
}

console.log(getSmallestPositive([1, 3, 6, 4, 1, 2]));
console.log(getSmallestPositive([1, 2, 3]));
console.log(getSmallestPositive([-1, -3]));


