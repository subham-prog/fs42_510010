let user = {
    username : "Shubham",
    showUsername: function() {
        console.log("Method : " + this.username);
    }
}

function displayUsername() {
    console.log("Function : " + this.username);
}

user.showUsername();
displayUsername();