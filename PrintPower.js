function givenExponential(n){
    let value=2;
    for (let i = 1; i <= n; i++) {
        console.log("2^" + i + " = " + value);
        value *= 2;
    }    
}
givenExponential(3);
givenExponential(8);
givenExponential(6);