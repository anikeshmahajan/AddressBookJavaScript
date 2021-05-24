function dateCheck(date)
{
    if(date >= new Date("March 20") && date <= new Date("June 20") )
    {
        console.log("True")
    }
    else{
        console.log("False")
    }
}
dateCheck(new Date("December 12"));
dateCheck(new Date("June 12"));