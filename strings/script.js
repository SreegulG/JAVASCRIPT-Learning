let s = "abcdefgh abc";

console.log(s.__proto__);
// charat
console.log(s.charAt(2));

//  concat
let s2 = "123"
console.log(s.concat(s2));
console.log(s2.concat(s));

// length
console.log(s.length);

// indexof
console.log(s.indexOf('b'));
console.log(s.indexOf('ab'));
console.log(s.indexOf('b', 8));

// replace
console.log(s.replace('a', 'xy'));
console.log(s);


console.log("ADWHD".toLowerCase());
