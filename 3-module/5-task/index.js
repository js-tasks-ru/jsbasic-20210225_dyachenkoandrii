function getMinMax(str) {

	let SpaceMap = str.split(',').map((item) => item.split(' '));

 	let max = -Infinity;
 	let min = Infinity;

 	let arr = SpaceMap.filter((item) => parseFloat(item, 10));

 	min = Math.min(...arr);
 	max = Math.max(...arr);

 	return {min, max}
}