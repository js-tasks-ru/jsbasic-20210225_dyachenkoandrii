function highlight(table) { 

	let body = table.getElementsByTagName('tbody');
	let tr = body.getElementsByTagName('tr');

	let  array = Array.from(tr);

	array.forEach((row) => {

	let statusList = row.getElementsByTagName('td');

		if(statusList.dataset.available === 'true') {
			row.classList.add('available');
		} 

		else if(statusList.dataset.available === 'false') {
			row.classList.add('unavailable');
		}

	let genderList = row.getElementsByTagName('td');
	
        if(genderList.textContent === 'm') {
            row.classList.add('male');
        }

        else if(genderList.textContent === 'f') {
            row.classList.add('female');
        }

    let decorationList = row.getElementsByTagName('td');
    
    	if(decorationList.textContent < 18) {
    		row.style.textDecoration = 'line-through';
    	}    

	});

}