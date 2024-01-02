// Memoization in js is a technique to reduce the complexity of the application and boost the performance

function add(){
    let res={}

    return function(...args){
        let str = JSON.stringify(...args);
        if (str in res) {

            console.log(res[str]);
            
        }else{
            let total =args.reduce((total,val)=>{
               return total+val;
            },0)
            res[str]=total;
            console.log(total);

        }
    }

} 


const calculate =add();
console.time()
calculate(5,6);
console.timeEnd()
console.time()
calculate(5,6);
console.timeEnd()
console.time()
calculate(14,35);
console.timeEnd()


// const arr =[4,5,6];
// let tt = arr.reduce((total,val)=>{
//    return total+val;
// },0);

// console.log(tt);