function getFactorial(num){
    let product=1;
    for (let i = 1; i <= num; i++) {
        product=product*i;
    }
    console.log(num+"! = "+product);
}
getFactorial(5);
getFactorial(9);
getFactorial(14);