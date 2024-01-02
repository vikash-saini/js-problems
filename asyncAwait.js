console.log("Nameste Javascript");

const p = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("resolved promise");
    }, 3000);

});

async function getData(){
    console.log("hello 1");
    const val = await p;
    console.log("hello 2");
    console.log(val);
}

getData();

console.log("The End"); //this line will not wait for the above promis to be resolved

// Output : 
// Nameste Javascript
// hello 1
// The End
// hello 2
// resolved promise



// How it works?
// when js engine start the execution it see console at line: 1 and print it
// as it moves forward in execution it see a function getData() is called at line: 18, enters into the funtion and see 
// a another console: hello2 , js engine execute it immedetialy
// not it was moving forward in execution it sees a await keyword with promise at line:13, 
// it sees the promise is not resolved yet, so as it says "Javascript doesn't wait for anything",
// since JS is a single thread synchronous language
// it suspend the execution of function getData() till the promise is resolved & come out from the funtion and 
// continue with it's execution with console at line:20
// Now once the promise is resolved it again comes inside the funtion and start the execution where it left @ line:13 