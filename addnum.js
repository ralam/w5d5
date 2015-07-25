var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question("Giff number ", function(n) {
      var num = parseInt(n);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else if(numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

var done = function (sum) {
  console.log("Total Sum: " + sum);
}

addNumbers(0, 5, done);
