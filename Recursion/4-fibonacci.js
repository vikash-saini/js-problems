/*
fibonacci number = 0,1,1,2,3,5,8,13,21,34......
f(0) =0; f(1)=1;
f(n)=f(n-2)+f(n-1);
*/

function fib(n){
let arr =[0,1];

for (let i = 2; i <=n; i++){
    arr.push(arr[i-2]+arr[i-1]);
   
}
return arr[n];

}

console.log(fib(8));

function fibRecursion(n){
    if (n ==0 || n==1) {
        return n;
    }

    return fibRecursion(n-2) + fibRecursion(n-1);
}

console.log(fibRecursion(8));
