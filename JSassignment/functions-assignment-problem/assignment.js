function sayHello(name) {
  console.log("Hi " + name);
}

sayHello();

// First Assignment
const sayHelloo = (name) => console.log("hi" + name);

// Second Assignment
const sayHelloo2 = (greet, name) => console.log(greet + " " + name);
const sayHelloo3 = (name) => console.log("hi hamdy 'hard coded'");
const sayHelloo4 = (name) => "hi " + name;

sayHelloo("hamdy");
sayHelloo2("hi", "hamdy");
sayHelloo3();
console.log(sayHelloo4("hamdy"));

// third Assignment

const sayHelloo5 = (name, greet = "hi") => console.log(greet + " " + name);

sayHelloo5("hamdy");
