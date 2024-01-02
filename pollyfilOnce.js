
function once(func,arguments){
    let context = this;
    return function(){
        if (func) {
            func.apply(context,arguments);
            func =null;
        }      
    }

}

const hello = once(()=>{console.log("hello ji");});
hello();
hello();
hello();