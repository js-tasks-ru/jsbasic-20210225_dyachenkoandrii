function getMinMax(str) {

	let SpaceMap = str.split(' ').join(',').split(',');


 	let arr = SpaceMap.filter((item) => isFinite(item));

 	min = Math.min(...arr);
 	max = Math.max(...arr);

 	return {min, max}
}