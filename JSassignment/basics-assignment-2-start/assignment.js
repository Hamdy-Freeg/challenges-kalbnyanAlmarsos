const task3Element = document.getElementById("task-3");

function myFunction() {
  alert(`hi my name is Hamdy`);
}

function myFunc(name) {
  alert(`hi my name is ${name}`);
}

// myFunction();
// myFunc("Freeg");

task3Element.addEventListener("click", myFunction);

function fullName(firstName, SecondName, LastName) {
  alert(`hi my name is ${firstName} ${SecondName} ${LastName}`);
}

fullName("hamdy", "freeg", "ibrahem");
