// let Student = function (name, surName) {
//   this.name = name;
//   this.surName = surName;
//   _grades = {
//     maths: [2, 3],
//   };
//   this.addGrade = function (subject, grade) {
//     for (const prop in this.grades) {
//       if (prop === subject) {
//         console.log(grades[prop]);
//       }
//     }
//   };
// };

// const student = new Student("Jan", "Kowalski");

// let circle1 = {
//   radius: 100,
//   center: {
//     x: 100,
//     y: 100,
//     point: {
//       x: 10,
//       y: 20,
//     },
//   },
// };

// let deepClone = function (obj) {
//   let newObj = { ...obj };
//   for (prop in newObj) {
//     if (typeof newObj[prop] === "object") {
//       newObj[prop] = deepClone(newObj[prop]);
//     }
//     return newObj;
//   }
// };

// let circle2 = deepClone(circle1);
// console.log(circle2);
// let circle3 = { ...circle1 };
// console.log(circle3);

// let circle = {
//   radius: 100,
//   center: {
//     x: 0,
//     y: 0,
//     show() {
//       console.log(`${this.x}, ${this.y}`);
//     },
//   },
// };

// circle.center.show();

// let contact = {
//   _age: 36,
//   firstName: "David",
//   lastName: "Taylor",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   get age() {
//     return this._age;
//   },
//   set age(a) {
//     if (a > 0) {
//       this._age = a;
//     }
//   },
// };

// let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
// console.log(desc);

// let contact = {};

// Object.defineProperty(contact, "_age", {
//   value: 36,
//   writable: false,
//   enumerable: false,
//   configurable: true,
// });

// let enumKEys = Object.keys(contact);
// let allKeys = Object.getOwnPropertyNames(contact);
// console.log(enumKEys);
// console.log(allKeys);

//FACTORY

// let createColoredPoint = function (x, y, color) {
//   let _info = "...object under construction";
//   let _color = color;
//   console.log(_info);

//   return {
//     x,
//     y,
//     getColor() {
//       return _color;
//     },
//   };
// };

//CONSTRUCTOR FN

// let ColoredPoint = function (x, y, color) {
//   let _info = "...object under construction";
//   let _color = color;
//   console.log(_info);

//   this.x = x;
//   this.y = y;
//   this.getColor = function () {
//     return _color;
//   };
// };

// let point1 = new ColoredPoint(1, 2, "red");
// let point2 = new ColoredPoint(2, 2, "green");

// console.log(point1.getColor());
// console.log(point2.getColor());
// console.log(point1._color);

// console.log(typeof point1.constructor);

// let a = {};
// console.log(typeof a.constructor);

// console.log(a.constructor.name);
// let emptyObject = new Object();
// console.log(emptyObject.constructor.name);

let Student = function (name, surname) {
  this.grades = {};
  this.name = name;
  this.surname = surname;

  this.addGrade = function (subject, grade) {
    if (subject in this.grades) {
      this.grades[subject] = [...this.grades[subject], grade];
    } else {
      console.log("tworze obiekt");
      this.grades = { ...this.grades, [subject]: [grade] };
    }
  };

  function averageCount(subjectGrades) {
    return (
      subjectGrades.reduce((acc, curr) => acc + curr, 0) / subjectGrades.length
    );
  }

  this.getAverageGrade = function (subject) {
    if (subject) {
      console.log(
        `średnia ${subject} przedmiotu to: ${averageCount(
          this.grades[subject]
        )}`
      );
    } else if (subject === undefined) {
      const averagesArray = [];
      for (const subject in this.grades) {
        avg.push(averageCount(this.grades[subject]));
      }
      console.log(
        `Średnia z wszystkich przedmiotów: ${averageCount(averagesArray)}`
      );
    }
  };
};
