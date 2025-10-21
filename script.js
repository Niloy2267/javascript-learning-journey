console.log("Hello, World!");
//Artmetic Operations
let a = 10;
let b = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));

//unary operator
let c= 10;
let d=6;
c=c++;
console.log(c); //post-increment
d=--d;
console.log(d); //pre-decrement
console.log(++c); //pre-increment
console.log(d--); //post-decrement

//Assignment Operators
let x=20;
x+=5;
console.log(x); //x=x+5
x-=3;
console.log(x); //x=x-3
x*=2;
console.log(x); //x=x*2
x/=4;
console.log(x); //x=x/4
x%=3;
console.log(x); //x=x%3
x**=2;
console.log(x); //x=x**2

//Comparison Operators
let p=10;
let q='10';
console.log(p==q); //true
console.log(p===q); //false
console.log(p!=q); //false
console.log(p!==q); //true
console.log(p>5); //true
console.log(p<15); //true
console.log(p>=10); //true
console.log(p<=8); //false

//Logical Operators
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); //false
console.log(isAdult || hasID); //true
console.log(!isAdult); //false

//CONDITIONAL STATEMENTS
let age = 25;
let mode= "dark";
let color;
color = (mode === "dark") ? "black" : "white";
console.log("Color: " + color);

if(age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}
