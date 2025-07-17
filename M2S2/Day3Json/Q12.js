function filternumber(arr){
    let filtered = arr.filter(num => num % 2 === 0);
    console.log(filtered)
  }
  
  function sumOfArray(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum)
  }
  function sortAndConcat(arr1, arr2) {
    const sorted1 = arr1.slice().sort((a, b) => a - b);
    const sorted2 = arr2.slice().sort((a, b) => a - b);
    console.log(sorted1.concat(sorted2))
  }
  sortAndConcat([10, 12, 1, 2, 3, 4, 9], [2, 4, 5, 6, 8, 9, 10])
  filternumber([10, 12, 1, 2, 3, 4, 9])
  sumOfArray([10, 12, 1, 2, 3, 4, 9])

  for (let i = 0; i < matrix.length; i++) {
  matrix[i].reverse();
}

