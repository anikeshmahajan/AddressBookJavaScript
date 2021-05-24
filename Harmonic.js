function getHarmonicSum(n){
    let sum=0;
    for (var i = 1; i <= n; i++) {
        sum += (1/i);
    }
    console.log(n+"th Harmonic sum =" + sum);
}
getHarmonicSum(4);
getHarmonicSum(8);
getHarmonicSum(12);