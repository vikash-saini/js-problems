let a = "geeksforgeeks";
let b = "forgeeksgeeks";

function isAnagram(str1,str2){
    let str1Map= new Map();  
    let str2Arr= str2.split('');
    var boolean= true;

    if (str1.length == str2.length) {
        for(let a of str1.split('').values()){
            // console.log(a);
            // str1Map[a] = (str1Map[a] || 0) + 1;
            str1Map.set(a , (str1Map.get(a) || 0) + 1);
        }

        for(let [key,value] of str1Map){
            // console.log(a);
            str1Map[a] = (str1Map[a] || 0) + 1;
            let count = str2Arr.filter(elem=>elem ==key).length;
            if (count == value) {
                boolean= true;
                continue;
            }else{
                boolean= false;
                break;
            }
        }

        return boolean;
        
    }else{
        return false;
    }

}

// isAnagram(a,b);

console.log(isAnagram(a,b));
