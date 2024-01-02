let arrr = [6,3,7,9,1,10,4];

function quickSort(arr){

    if (arr.length <=1) {
        return arr;
    }

    let pivot =arr[0];
    let leftArr=[];
    let rightarr=[];

    for (let i = 0; i < arr.length; i++) {
        if (pivot==arr[i]) {
            pivot = arr[i];
        }
        
        if (pivot <arr[i]) {
            rightarr.push(arr[i]);
            
        }else if(pivot >arr[i]){
            leftArr.push(arr[i]);
        }        
    }
    // console.log(leftArr,pivot,rightarr);
    return [...quickSort(leftArr),pivot,...quickSort(rightarr)];
}

console.log(quickSort(arrr));