function unitCheck(num){
    if(num == 1) console.log("Ones");
    else if(num == 10) console.log("Ten");
    else if(num == 100) console.log("Hundred");
    else if(num == 1000) console.log("Thousand");
    else if(num == 10000) console.log("Ten Thousand");
    else console.log("Invalid Number");
}
unitCheck(1);
unitCheck(100);
unitCheck(999);
unitCheck(10000);