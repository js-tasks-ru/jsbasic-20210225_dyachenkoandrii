function getMinMax(str) {
	let CommaSplit = str.split(',');
	//console.log(CommaSplit);

	let SpaceMap = CommaSplit.map((item) => item.split(' '));
 	//console.log(SpaceMap);

 	let numbers =[];

 	SpaceMap.forEach((item) => { 
 		item.forEach((itemElement) => {

	 		if(itemElement === '') {
	 			return;
	 		}

	 		let num = parseFloat(itemElement, 10);

	 		
	 		if(isNaN(num)) {
	 			return;
	 		}
	 		
	 		numbers.push(num);
 		})
 	});	

 	const min = Math.min(numbers);
 	const max = Math.max(numbers);

 	return {
 		min, max
 	}
}
