let max = Math.floor(Math.random () *1000 );

let min  ;
for (let i = 0; i < 5; i++) {
    let num =Math.floor(Math.random () *1000 );
    if(num>max )
    {
        max = num;
    }else{
        min =num
    }
    
}
console.log("max"+max);
console.log(min);
