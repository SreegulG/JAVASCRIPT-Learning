// type conversion

// to number
// Number()
console.log('================== Number() ==================');
console.log(Number('123'));
console.log(Number('avc'));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));

//  using unary operator
console.log('================== using unary operator ==================');
let x = "12";
console.log(+x);
console.log(-x);
console.log(+'abc');
console.log(+null);
console.log(+undefined);
console.log(+false);

//  parseInt()
console.log('================== parseInt() ==================');
console.log(parseInt('456'));
console.log(parseInt('abc'));
console.log(parseInt('456a56'));
console.log(parseInt('a456s'));
console.log(parseInt('456.89'));
console.log(parseInt(null));
console.log(parseInt(true));
console.log(parseInt(undefined));

// parseFloat
console.log('================== parseFloat() ================== ');
console.log(parseFloat('456'));
console.log(parseFloat('456.09'));
console.log(parseFloat('456.09aefef'));
console.log(parseFloat('asd456.09as'));
console.log(parseFloat('456.09.8'));
console.log(parseFloat(null));
console.log(parseFloat(true));
console.log(parseFloat(undefined));

// to string
// String()
console.log('================== to string with String() ================== ');
console.log(String(78));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(false));

// toString()
console.log('================== toString() ================== ');
console.log((123).toString())
console.log(false.toString())

// to bool Boolean()
console.log('================== Boolean() ================== ');
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("dwff"));

function shoppingDiscountCalculator(originalValue, discountPercentage) {
  let answer;
  let originalValueFloat = parseFloat(originalValue);
  let discountPrice = parseFloat(discountPercentage) * originalValueFloat;
  answer = originalValueFloat - discountPrice / 100;
  console.log(answer);
  return answer
}

shoppingDiscountCalculator("50.75", "15.5");
