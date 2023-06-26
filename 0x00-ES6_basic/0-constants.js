// 0-constants.js

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
var PI = 3.14;
var radius = 5;

function calculateArea() {
  var area = PI * radius * radius;
  console.log("The area is: " + area);
}

calculateArea();
const PI = 3.14;
let radius = 5;

function calculateArea() {
  let area = PI * radius * radius;
  console.log("The area is: " + area);
}

calculateArea();
