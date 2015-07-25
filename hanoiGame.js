var HanoiGame = function() {
  this.stacks = [[1, 2, 3], [], []];
  this.height = 3;
};

HanoiGame.prototype.isValidMove = function (idx1, idx2) {
  if (this.stacks[idx1].length === 0) {
    return false;
  } else if (this.stacks[idx2].length !== 0 && this.stacks[idx1][0] > this.stacks[idx2][0]){
    return false;
  } else {
    return true;
  }
};

HanoiGame.prototype.move = function (idx1, idx2) {
  if (this.isValidMove(idx1, idx2)) {
    this.stacks[idx2].unshift(this.stacks[idx1].shift());
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  var printTimes = this.height;
  var printCopy = [];
  var tall = this.height;
  this.stacks.forEach(function (el) {
    var newCol = el;
    if (el.length < tall) {
      for (var i = el.length; i < tall; i++) {
        newCol = [" "].concat(newCol);
      }
    }
    printCopy.push(newCol);
  });
  
  // while(printTimes > 0) {
  //
  //   var arr = []
  //
  //   this.stacks.forEach(function (el) {
  //
  //
  //
  //   })
  //   console.log(JSON.stringify());
  // }
};

HanoiGame.prototype.isWon = function () {
  if (this.stacks[0].length === 0 && this.stacks[1].length === 0) {
    return true;
  }  else {
  return false;
  }
};


var newGame = new HanoiGame();
console.log(newGame.stacks);
