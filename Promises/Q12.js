function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataHandler();
