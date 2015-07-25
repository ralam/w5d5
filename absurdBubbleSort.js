var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function askIfGreateThan(el1, el2, callback) {
  reader.question("Is " + el1 + " bigger than " + el2 + " ?", function(reply) {
    var answer = reply;
    if (answer === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log("your array is [" + arr + "]");
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length - 1)  {
    askIfGreateThan(arr[i], arr[i + 1], function (isGreaterThan) {

      if (isGreaterThan === true ) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);

    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0 , false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
