function outerFunction() {
  const outerVar = "I am from outer scope";
  
  function innerFunction() {
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction(); // This code demonstrates a closure where innerFunction has access to outerVar from its parent scope (outerFunction).
