function getPrime(num){
    for (let i = 3; i < num; i++) {
        let primeFlag=true;
        for (var j = 2; j < i; j++){
            if (i % j == 0) {
                primeFlag=false;
                break;
            }
        }
        if(primeFlag) console.log(i+" is a Prime Number");
    }
}
getPrime(9);
getPrime(18);
getPrime(21);