let headCount=0;
let tailCount=0;
do{
    let coin=Math.floor(Math.random()*10) % 2;
    if(coin==0) headCount++;
    else tailCount++;
}while(headCount<11 && tailCount<11);
console.log(headCount>tailCount?"Heads Win":"Tails Win");
console.log("No of heads= "+headCount);
console.log("No of tails= "+tailCount);