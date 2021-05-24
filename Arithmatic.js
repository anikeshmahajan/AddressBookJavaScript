  
    let a=30;
    let b =100;
    let c =12;
    let value1 = a+b*c;
    let value2 = a%b+c;
    let value3 = c+a/b;
    let value4 = a*b+c;
    
    

    if(value1 > value2 && value1 > value3 && value1 > value4){
        console.log("Max: "+"a+b*c="+value1);
    }else if(value2> value1 && value2 > value3 && value2 > value4){
        console.log("Max: "+"a%b+c="+value2);
    }else if(value3 > value1 && value3 > value2 && value3 > value4){
        console.log("Max: "+"c+a/b="+value3);
    }else {
        console.log("Max: "+"a*b+c="+value4);
    }

    if(value1 < value2 && value1 < value3 && value1 < value4){
        console.log("Min: "+"a+b*c="+value1);
    }else if(value2 < value1 && value2 < value3 && value2 < value4){
        console.log("Min: "+"a%b+c="+value2);
    }else if(value3 < value1 && value3 < value2 && value3 < value4){
        console.log("Min: "+"c+a/b="+value3);
    }else {
        console.log("Min: "+"a*b+c="+value4);
    }