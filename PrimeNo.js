function checkPrime(num){
    let primeFlag=true;
    for (let i = 2; i < num/2; i++) {
        if (num % i == 0) {
            console.log(num+" is NOT a Prime Number");
            primeFlag=false;
            break;
        }
    }
    if (num>1 && primeFlag){
        console.log(num+" is a Prime Number");
    }
}
checkPrime(9);
checkPrime(11);
checkPrime(57);