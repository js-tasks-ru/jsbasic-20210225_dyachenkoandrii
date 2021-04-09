 function makeFriendsList (friends) {

  const ul = document.createElement('ul');

    friends.forEach((item) => {
    const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${item.firstName}, ${item.lastName}`));
      ul.appendChild(li);
    });

    document.body.appendChild(ul);

  return ul;
}

