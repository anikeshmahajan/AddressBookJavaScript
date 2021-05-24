function yearCheck(year){
    if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
    console.log("Year " + year + " is a leap year");
else
console.log("Year " + year + " is not a leap year");

}
yearCheck("2020");
yearCheck("1900");
