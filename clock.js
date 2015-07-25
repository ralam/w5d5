

function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.run = function () {
  var currentTime = new Date();
  this.printTime(currentTime);

  var self = this;
  var timeout = function () {

    setTimeout(function () {
        self._tick(currentTime);
        timeout();
    }, 5000);
  };
  timeout();
};

Clock.prototype._tick = function (currentTime) {
  currentTime.setSeconds(currentTime.getSeconds() + 5);
  this.printTime(currentTime);
};

Clock.prototype.printTime = function(currentTime) {
  console.log(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds());
};



var time = new Clock();
time.run();
