function smallestPossible(val){
    let smallest = [];
    let sortedVal= val.split('').sort((a,b)=> a-b);
    
     for(let i=0;i< sortedVal.length;i++){      
        if(parseInt(sortedVal[0]) !==0){
            console.log("if");
            break;        
        }
        if(sortedVal[i+1] && sortedVal[i+1]>0){
            let arr = sortedVal.slice(0,i+1);           
            let nonZero = sortedVal[i+1];          
            smallest = [nonZero,...arr,...sortedVal.slice(i+2)];          
            break;
        }
        
    }
    
    console.log("final",smallest);
  
  }
  
  let input= "55204410"
  // output = “10024455”
  
  smallestPossible(input);