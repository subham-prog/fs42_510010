function logMessage(count) {
  console.log(`Countdown at ${count}`);
}

function countDown(num) {
  if (num < 0) return;
  logMessage(num);
  countDown(num - 1);
}

countDown(3); //Function call stack: countDown(3) -> logMessage(3) -> countDown(2) -> logMessage(2) -> countDown(1) -> logMessage(1) -> countDown(0) -> logMessage(0) -> countDown(-1)
