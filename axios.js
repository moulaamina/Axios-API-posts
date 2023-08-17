function getUsers() {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      let users = response.data;
      document.getElementById('users').innerHTML = '';
      for (user of users) {
        let content = `
        <div id="user" onclick="userClicked(${user.id},this)">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
        `;
        document.getElementById('users').innerHTML += content;
      }
    })
    .catch(() => {
      alert('Error');
    });
}

function getPosts(userId) {
  axios
    .get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then((response) => {
      let posts = response.data;
      document.getElementById('posts').innerHTML = '';
      for (post of posts) {
        let content = `
        <div id="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        document.getElementById('posts').innerHTML += content;
      }
    });
}

getUsers();
getPosts(1);

function userClicked(id, element) {
  getPosts(id);
  let clicked = document.getElementsByClassName('clicked');
  for (el of clicked) {
    el.classList.remove('clicked');
  }
  element.classList.add('clicked');
}
