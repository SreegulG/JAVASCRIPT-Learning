// function
function fn1() {
  console.log("hello");
}

fn1();

// function with arguments
console.log("function with arguments");
function sum(num1, num2) {
  console.log(`sum of 2 numbers: ${num1 + num2}`)
}

sum(1, 2);
sum(19, 29);

// function with default arguments
console.log("function with default arguments");
function sum(num1, num2 = 0) {
  console.log(`sum of 2 numbers: ${num1 + num2}`)
}

sum(1, 2);
sum(19);

console.log(sum(4));

// function with return
console.log("function with return");
function square(num) {
  return num * num;
}

console.log(square(2));
