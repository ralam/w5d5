Function.prototype.myBind = function (context) {
  var fn = this;
  // var ct = context;
  return function () {
    return fn.apply(context);
  }
};


function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log("meow " + this.name);
}

var gizmo = new Cat("Gizmo");
var markov = new Cat("Markov");

var gizMeow = markov.meow.myBind(gizmo);
gizMeow();
// meow Gizmo

// function style: this => current context (usually window)
// myFunction();

// method style: this => method's receiver (obj)
// obj.myFunction();

// constructor style: this => new instance of the class (gizmo)
// var gizmo = new Cat();
