function getTemp(input,temp){
    let convertedTemp=0;
    switch(input){
        case "degreeC":{
            console.log("Converting to Fahrenheit");
            convertedTemp=(temp*(9/5)) +32;
            console.log(temp+" deg C = "+convertedTemp+" degF");
            break;
        }
        case "degreeF":{
            console.log("Converting to Celcius");
            convertedTemp=((temp-32)*(5/9));
            console.log(temp+" deg F = "+convertedTemp+" degC");
            break;
        }
    }
}
getTemp("degreeC",Math.floor(Math.random()*100));
getTemp("degreeF",Math.floor((Math.random()*181)+32));