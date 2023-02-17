class Course {
  get #outputPrice() {
    return "$" + this._price;
  }

  set #outputPrice(value) {
    if (value < 0) {
      throw "invalid input";
    }
    this._price = value;
  }
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this._price = price;
  }
  calcValue() {
    return this.length / this._price;
  }
  couresSummary() {
    console.log(this.title, this.length, this._price);
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log("print something hh");
  }
}

let course1 = new Course("Java Script", 53, -33);
// let course2 = new Course("React", 47, 15.99);

console.log(course1);
// console.log(course2);
// console.log(course1.calcValue());
// console.log(course2.calcValue());

// course1.couresSummary();
// course2.couresSummary();

const cppCourse = new PracticalCourse("c++ course", -60, -25.99, 17);
const javaCourse = new TheoreticalCourse("javaCourse", -50, -22);

console.log(cppCourse);
cppCourse.couresSummary();
cppCourse.calcValue();
javaCourse.publish();
javaCourse.calcValue();
javaCourse.couresSummary();
