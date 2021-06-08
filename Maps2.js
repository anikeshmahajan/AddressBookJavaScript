
let birthMonthMap=new Map();
let monthBirthMap=new Map();
for (var i=1;i<=12;i++){
    monthBirthMap.set(i,new Array());
}
for (var i=1;i<=50;i++){
    let month=Math.floor((Math.random()*12)+1);
    birthMonthMap.set("Person "+i,month);
    for (var j=1;j<=12;j++){
        if (month==j){
            let newArr=monthBirthMap.get(j);
            newArr.push("Person "+i);
            monthBirthMap.set(j,newArr);
        }
    }
}
console.log("Map containing input data:");
console.log(birthMonthMap);
console.log("Map with people having same birth month:");
console.log(monthBirthMap);