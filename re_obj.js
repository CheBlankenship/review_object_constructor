function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log("Hello" + other.name + " , I am " + this.name + "!");
};

Person.prototype.info = function() {
  console.log(this.name + "'s info. email: " + this.emil + ", phone number: " + this.phone + ".");
};

var boby = new Person("Boby", "boby@gmail.com", "909-333-1233");
var alexsander = new Person("Alex", "alex@gmail.com", "565-323-3421");


// alexsander.greet(boby);
// boby.info();
