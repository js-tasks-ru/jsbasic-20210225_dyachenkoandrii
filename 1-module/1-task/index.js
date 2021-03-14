function factorial(n) {
	let numFact = 1;
    for(let i = 1; i <= n; i++) {
    	numFact = numFact * i;
    }	
    return numFact;

    // Старый пример:
	/* 
	let numFact = 1;
	for(numFact = 1; numFact <= 1; numFact++) {
	    if(n == 0) {
	      return 1;
	    }else {
	      return n * factorial(n - numFact);
	    }
    }
    */
}