let arrr = [6,3,7,9,1,10,4];

function sort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]<arr[j]) {
                let item = arr[i];
                arr[i] =arr[j];
                arr[j] = item;
            } 
        }
        
    }

    return arr;
}

console.log(sort(arrr));