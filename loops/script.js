// for loop and if else loop
console.log("for loop and if else loop");
for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(i, "odd");
  }
  else {
    console.log(i, "even");
  }
}


// for loop and switch case
console.log("for loop and switch case");
for (let i = 10; i > 0; i--) {
  let c = i % 5;
  switch (c) {
    case 1:
      console.log(i, c);
      break;
    case 2:
      console.log(i, c);
      break;
    case 3:
      console.log(i, c);
      break;
    case 4:
      console.log(i, c);
      break;
    default:
      console.log(i, "divisible by 5");
  }
}

// for loop and ternary operator
console.log("for loop and ternary operator");
for (let i = 1; i <= 10; i++) {
  let even = i % 2 ? 'odd' : 'even';
  console.log(i, even);
}

// while loop and if else loop
console.log("while loop and if else loop");
let i = 1;
while (i <= 10) {
  if (i % 2) {
    console.log(i, "odd");
  }
  else {
    console.log(i, "even");
  }
  i++;
}


// do while loop and if else loop
console.log("do while loop and if else loop");

let randNum = Math.trunc(Math.random() * 10);
do {
  guessNum = prompt("Guess a number from 0 to 10");
  if (guessNum == randNum) {
    console.log("Correctly guessed", randNum);
  }
  else {
    console.log("Try again");
  }
}
while (randNum != guessNum);
