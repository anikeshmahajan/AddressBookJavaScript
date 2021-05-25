let max=100;
let min=1;
let num=Math.floor(Math.random()*100)+1;
console.log("Generated number: "+num);
let mid
do{
    mid=Math.floor(((min+max)/2));
    if(num<mid){
        max=mid;
        console.log(num+" is less than "+mid);
    }else if(num>mid){
        min=mid;
        console.log(num+" is more than "+mid);
    }
}while(num!=mid);
console.log("Found "+mid);