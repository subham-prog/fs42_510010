fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
