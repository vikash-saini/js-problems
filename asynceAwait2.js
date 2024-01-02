console.log("Nameste Javascript");

const p1 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("resolved promise 1");
    }, 6000);

});

const p2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("resolved promise 2");
    }, 3000);

});


async function getData(){
    console.log("hello 1");

    const val = await p1; //Js engine will suspend the execution till the promise get resolved
    console.log("hello 2");
    console.log(val);

    const val2 = await p2;
    console.log("hello 3");
    console.log(val2);
}

getData();

console.log("The End"); //this line will not wait for the above promis to be resolved

// Output : 

// in above example the p1 & p2 will execute together after 6 second, even though the p2 is resolved in 3 seconds
// but since p1 is declared first so the callstack will wait for p1 to be resolved. when it reached to p2, it sees the p2 is already resolved
// so it will execute together
