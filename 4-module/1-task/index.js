function makeFriendsList (friends) {

 	let ul = document.createElement('ul');	
	let li = document.createElement('li');

	friends.forEach((item, arr) => {
	
		ul.insertAdjacentHTML('beforeEnd', '<li>'+item.firstName+item.lastName+'</li>');

	});
	  
  return ul;
}