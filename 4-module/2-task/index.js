function makeDiagonalRed(table) {
 for(let i = 0; i < table.rows.length; i++) {
 	let tableRed = table.rows[i];
 	tableRed.cells[i].style.backgroundColor = 'red';
 }
}


