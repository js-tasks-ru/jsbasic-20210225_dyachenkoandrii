function makeDiagonalRed(table) {
 for(let i = 0; i < table.length; i++) {
 	let tableRed = table[i];
 	tableRed.cells[i].style.backgroungColor = 'red';
 }
}


