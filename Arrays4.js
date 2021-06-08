function checkPalindrome(num){
    let revDigits=0;
    let number=num;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    if(revDigits == number) return true;
    else return false;
}

let newArray=new Array();
for(var i = 10; i <= 100; i++){
    if(checkPalindrome(i)) newArray.push(i);
}
console.log("The Repeated digits between 0-100 are: ");
console.log(newArray);