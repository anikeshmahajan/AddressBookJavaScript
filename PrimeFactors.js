function getPrimeFactors(num) {
    for (let i = 2; i <= num; i++) {
        while (num % i == 0) {
            console.log(i+" is a Prime Factor");
            num = num / i;
        }
    }
}
getPrimeFactors(5);
getPrimeFactors(9);
getPrimeFactors(14);