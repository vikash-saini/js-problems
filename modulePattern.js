// Q what is module pattern

var Module = (function(){

    function privateMethod(){
        console.log("privateMethod");
    }

    return {
        publicMethod:function (){
            console.log("public method");
            privateMethod()
            
        }
    }
}

)

const fun=Module();
fun.publicMethod();
