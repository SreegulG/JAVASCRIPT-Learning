// array declaration
a = [1, 2, 3, 4];
console.log(a);
b = ['x', 'y', 10, 12, true];
console.log(b);
c = new Array(100, 102, 100);
console.log(c);

// array methods
// finding length of array
console.log("finding length of array");
console.log(a.length);

// adding element in end
console.log("adding element in end");
a.push(1000);
console.log(a);
console.log(a.push(1));
console.log(a);

// adding element in start
console.log("adding element in start");
b.unshift(1000);
console.log(b);
console.log(b.unshift(1));
console.log(b);

// removing element from end
console.log("removing element from end");
a.pop();
console.log(a);
console.log(a.pop());
console.log(a);

// removing element from start
console.log("removing element from start");
b.shift(1000);
console.log(b);
console.log(b.shift(1));
console.log(b);

// finding index of an element
console.log("finding index of an element");
console.log(a.indexOf(3));
console.log(a.indexOf(90));

// finding  element present or not
console.log("finding  element present or not");
console.log(a.includes(3));
console.log(a.includes(90));

// slicing array
console.log("slicing array ");
console.log(a);
console.log(a.slice(2));
console.log(a);
console.log(a.slice(-1));
console.log(a);

// splicing array
console.log("splicing array ");
a.splice(2, 0, "k", "j", "l");
console.log(a);
a.splice(2, 2, "abc");
console.log(a);

// concat arrays
console.log("concat arrays");
console.log(a.concat(b));
console.log(a);
console.log(a.concat(b, c));


// for in loop
console.log("for in loop");
for (let i in a) {
  console.log(`index: ${i} of element ${a[i]}`);
}

// for of loop
console.log("for of loop");
for (let i of a) {
  console.log(i);
}

arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  let newArr = [...arr1, ...arr2];
  let newArr2 = [], x;
  for (let i of newArr) {
    if (!newArr2.includes(i)) {
      newArr2.push(i);
    }
  }
  return newArr2
}
console.log(mergeArray(arr1, arr2));
