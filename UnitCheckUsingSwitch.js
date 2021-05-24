function unitCheck(num){
    switch(num){
        case 1: console.log("Unit"); break;
        case 10: console.log("Ten"); break;
        case 100: console.log("Hundred"); break;
        case 1000: console.log("Thousand"); break;
        case 10000: console.log("Ten Thousand"); break;
        default: console.log("Invalid Number");
    }
}
unitCheck(1);
unitCheck(100);
unitCheck(999);
unitCheck(10000);