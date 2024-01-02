// @ what will be print in console

let count =0;
(function printCount(){
    if(count===0){
        let count =1;
        console.log(count);
    }
    console.log(count);

})();

// output ->1 ,0

// Q2 - write a funtion that couls allow you to do this
console.time();
var addSix = createBase(6);
addSix(10); //return 16
addSix(21) //return 27
console.timeEnd();
function createBase(a){
    function add(b){
        console.log(a+b);
       
    }
    return add;
}

// Q3 : Time consume

function findIndex(){
    let arr =[];
    for (let i = 0; i < 1000000; i++) {
        arr.push(i);        
    }

   
    return function(index){
        console.log(arr[index]);
    }
}


// console.time();
// const closure = findIndex();
// closure(6)
// console.timeEnd();
// console.time();
// closure(50)
// console.timeEnd();

// Q: block scope and setTimeout

// for (let i = 0; i < 5; i++) {
    
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
    
// }

// for (var i = 0; i < 5; i++) {
    
//     function inner(i){
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     inner(i)
    
// }