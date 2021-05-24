function unitConversion(input,value){
    switch(input){
        case 1: console.log("Feet To Inch: "+value+" ft = "+(value*12)+" in"); break;
        case 2: console.log("Feet To Metre: "+value+" ft = "+(value*0.3048)+" m"); break;
        case 3: console.log("Inch To Feet: "+value+" in = "+(value/12)+" ft"); break;
        case 4: console.log("Metre To Feet: "+value+" m = "+(value*3.28084)+" ft"); break;
        default: console.log("Invalid Number");
    }
}
unitConversion(1,24);
unitConversion(2,24);
unitConversion(3,24);
unitConversion(4,24);