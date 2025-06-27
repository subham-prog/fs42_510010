function multiplyNumbers(a, b) {
    return a*b;
}
let result = multiplyNumbers.apply(null, [2, 3]);
console.log(result)