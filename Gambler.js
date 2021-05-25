let money=100;
let betsPlaced=0;
let winCount=0;
do{
    betsPlaced++;
    let bet=Math.floor(Math.random()*10) % 2;
    if (bet==1){
        money++; winCount++;
    }else{
        money--;
    }
}while(money>0 && money<200);
console.log("You have Rs "+money+" in the end");
console.log("You won "+winCount+" out of "+betsPlaced+" bets");