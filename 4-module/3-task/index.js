function highlight(table) { 

	let body = table.getElementsByTagName('tbody')[0];
	let tr = body.getElementsByTagName('tr');

	let  array = Array.from(tr);

	array.forEach((row) => {

	let decorationList = row.getElementsByTagName('td')[1];
    
    	if(decorationList.textContent < 18) {
    		row.style.textDecoration = 'line-through';
    	}

    let genderList = row.getElementsByTagName('td')[2];
	
        if(genderList.textContent === 'm') {
            row.classList.add('male');
        }

        else if(genderList.textContent === 'f') {
            row.classList.add('female');
        } 	

	let statusList = row.getElementsByTagName('td')[3];

		if(statusList.dataset.available === 'true') {
			row.classList.add('available');
		} 

		else if(statusList.dataset.available === 'false') {
			row.classList.add('unavailable');
		}   

		else if(!statusList.dataset.available) {
			row.hidden = true;
		}

	});

}