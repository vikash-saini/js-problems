
function multiply(arr){

    if (arr.length ==1) {       
        return arr[0];
    }
    if (arr[arr.length-1] ==0) {
       return 1 * multiply(arr.slice(0,arr.length-1))
    } 
   
    return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1));

}

console.log(multiply([1,2,3,0,4,5,0]));

// console.log([1,2,3,0,4,5,0].slice(-2,-1));