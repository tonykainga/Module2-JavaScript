let a = 10;
let b = 5;
let c = 20;
let d = 3;

console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b*c =", a * b * c);
console.log("c%b =", c % b);
console.log("c%d =", c % d);
console.log("b**d =", b ** d);

a = 25;
a += 3;
a = a + 3;
a -= 4;
a *= 3;
console.log("a =", a);

console.log("a>b =", a > b);
console.log("d<a =", d < a);
console.log("b>=c =", b >= c);
console.log("a<=c =", a <= c);

console.log('6=="6" =', 6 == "6");
console.log('6==="6" =', 6 === "6");

console.log("10!=5 =", 10 != 5);
console.log('10!=="10" =', 10 !== "10");
console.log("10!==10 =", 10 !== 10);
console.log('"Hello"==="World" =', "Hello" === "World");

console.log("true&&true =", true && true);
console.log("true&&false =", true && false);
console.log("true||false =", true || false);
console.log("false||false =", false || false);
console.log("!false =", !false);
console.log("!true =", !true);