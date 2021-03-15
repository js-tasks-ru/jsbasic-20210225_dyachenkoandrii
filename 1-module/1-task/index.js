function factorial(n) {
	let numFact = 1;
    for(let i = 1; i <= n; i++) {
    	numFact = numFact * i;
    }	
    return numFact;
}