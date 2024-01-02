// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:[1,2,3,4,5]


function rangeofnumbers(startNum,endNum){
    let newArr=[];
    
    for (let i = startNum; i <= endNum; i++) {
        newArr.push(i);    
    }

    return newArr
} 

console.log(rangeofnumbers(8,5));
console.log(rangeofnumbers(3,9));

function rangeofnumbers1(startNum,endNum){
  
    if (startNum >endNum) {
        return [];
    }
    if (endNum==startNum) {
        return [endNum];
    }   

    return [startNum,...rangeofnumbers(startNum+1,endNum)];
} 

console.log(rangeofnumbers1(12,9));