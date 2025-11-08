"use strict";
//Exo: 03

//const: slide 51/37
//console.log() slide 33
//functions: slide 45


//Table of objects, slide: 40
const students = [
  {
    id: 1000,
    firstName: "JOHN",
    lastName: "DOE",
    note1: 14,
    note2: 5,
  },
  {
    id: 2000,
    firstName: "BOB",
    lastName: "CARLTON",
    note1: 7,
    note2: 1,
  },
  {
    id: 1000,
    firstName: "JOHN",
    lastName: "DOE",
    note1: 13,
    note2: 3,
  },
];

function functionA() {
  
//for..of loop, slide: 44
  for (const student of students) {
    
    const average = (student.note1 + student.note2) / 2 + 5;
    const pass = functionB(average);
    
    // if...else, slide: 42
    if (pass) {
      console.log(`${student.id}: Admis`);
    } else {
      console.log(`${student.id}: Ajourné`);
    }
  }
}

function functionB(average) {
  return average >= 10;
}
