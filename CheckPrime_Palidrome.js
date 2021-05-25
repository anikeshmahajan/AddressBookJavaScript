function checkPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num+" is NOT a Prime Number");
            return false;
        }
    }
    if (num>1){
        console.log(num+" is a Prime Number");
        return true;
    }
}

function getPalindrome(num){
    let revDigits=0;
    let number=num;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    console.log("The palindrome of "+number+" is "+revDigits);
    return revDigits;
}

function main(num){
    let PrimeFlag=checkPrime(num);
    if(PrimeFlag){
        let palindrome=getPalindrome(num);
        checkPrime(palindrome);
    }
}
main(17);
main(22);
main(23);