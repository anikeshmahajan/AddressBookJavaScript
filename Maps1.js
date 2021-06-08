
function checkBreakCond(diceMap){
    let rollCount=0;
    let flag=false;
    for (var i=1;i<=6;i++){
        rollCount=diceMap.get(i);
        if(rollCount==10){
            flag = true;
            break;
        }
        flag = false;
    }
    return flag;
}

let getMaxFlag=false;
let diceMap=new Map();
for (var i=1;i<=6;i++){
    diceMap.set(i,0);
}
console.log("Generating Starter Map: ");
console.log(diceMap);
let roll=0;
do{
    roll = Math.floor((Math.random()*6)+1);
    let rollCount=diceMap.get(roll);
    diceMap.set(roll,rollCount+1);
    getMaxFlag=checkBreakCond(diceMap);
}while(!getMaxFlag);
console.log("Map at end Condition:");
console.log(diceMap);
console.log("Got max value:10, for number "+roll);

let minCount=10;
let min=10;
for (var i=1;i<=6;i++){
    let rollCount=diceMap.get(i);
    if (rollCount<minCount){
        minCount=rollCount;
        min=i;
    }
}
console.log("Got min value:"+minCount+", for number "+min);
