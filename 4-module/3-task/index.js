function highlight(table) { 

	let body = table.getElementsByTagName('tbody');
	let tr = body.getElementsByTagName('tr');

	let  array = Array.from(tr);

	array.forEach((row) => {

	let fmaleList = row.getElementsByTagName('td');
	
        if(fmaleList.textContent === 'm') {
            row.classList.add('male');
        }

        else if(fmaleList.textContent === 'f') {
            row.classList.add('female');
        }

	});

}