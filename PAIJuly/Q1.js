function makeCounter(label) {
  let count = 0;
  return function () {
    count++;
    console.log(`${label}: ${count}`);
  };
}

let Counter = makeCounter("label");
Counter();
Counter(); 
Counter(); 


