
const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

let userInfo = JSON.stringify(user);
const parsedUser = JSON.parse(userInfo);
for (const key in parsedUser) {
    console.log(`${key}: ${parsedUser[key]}`);
}  