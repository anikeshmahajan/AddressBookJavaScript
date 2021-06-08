function getPrimeFactors(num) {
    let number=num;
    let factors=new Array();
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            factors.push(i);
            num = num / i;
        }
    }
    console.log("The Prime Factors of "+number+" are:");
    console.log(factors);
}
getPrimeFactors(5);
getPrimeFactors(9);
getPrimeFactors(14);
