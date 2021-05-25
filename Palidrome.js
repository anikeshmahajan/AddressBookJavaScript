function checkPalindrome(num1,num2){
    let revDigits=0;
    let num=num1;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
         num=Math.floor(num/10);
    }
    if(revDigits == num2) 
        console.log(num1+" and "+num2+" are Palindromes");
    else
        console.log(num1+" and "+num2+" are NOT Palindromes");
}
checkPalindrome(256,652);
checkPalindrome(141,414);
checkPalindrome(404,404);