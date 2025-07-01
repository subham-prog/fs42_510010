function fetchUserData(callback) {
  console.log("Fetching user data ...");
  setTimeout(() => {
    callback("User data received");
  }, 1000);
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts ...");
  setTimeout(() => {
    callback("User posts received");
  }, 1500);
}

fetchUserData((userDataMessage) => {
  console.log(userDataMessage);

  fetchUserPosts((userPostsMessage) => {
    console.log(userPostsMessage);

    console.log("All data loaded successfully!");
  });
});
