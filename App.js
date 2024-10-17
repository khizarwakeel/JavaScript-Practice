// Core JavaScript Practice # 1

console.log(hoisting);
var fullName = showMessage("Khizar", "Wakeel");
console.log(fullName);
alert("Hello World");
alert(45);

console.log(isFeePaid);

console.log("Hello World");
console.log(45);

document.write("Hello Mutex!");

var age = "23";
console.log(age)

age = 25;
console.log(age);

var age = 45;
var nationality = "Pakistani";
var isFeePaid = "true";

console.log(age);
console.log(nationality);
console.log(isFeePaid);

age = 23;
nationality = "Iraqian";
isFeePaid = "false";

console.log(age);
console.log(nationality);
console.log(isFeePaid);

var name = "Khizar Wakeel";
console.log(name);

name = "Ahmed";
console.log(name);

var message = "Hello it's me!";
console.log(message);

var message = 'Hello it"s me!';
console.log(message);

var age = 25;
var weight = 150.5;
var newWeight = weight + 20;

console.log(age);
console.log(weight);
console.log(newWeight);

var isFeePaid = true;
var examPassed = false;

console.log(isFeePaid);
console.log(examPassed);

name = undefined;
age = undefined;

console.log(name);
console.log(age);

var variable;
var google;

console.log(variable);
console.log(google);

var name = "Khizar";
console.log(name);

var name = 25;
console.log(name);

var name = true;
console.log(name);

var age = 34;
var name = "Hello";
var isFeePaid = false;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isFeePaid);

isFeePaid = 23;
console.log(typeof isFeePaid);

var a = "Hello";

var i = 3; var j = 5;
console.log(i); console.log(j);

var a = 2;
var b = 5;
var c = 0.5;
var d = a + b + c;

console.log(d);

// Declare and Initialize Variable

var a = 6; // This is Comment
// This below code will not execute
// var b = 8;

/*
This is code declared and initialize variable (a) and show on screen
*/

// alert("Hello World");

var firstName = "Khizar";
console.log(firstName);

var lastName = "Wakeel";
console.log(lastName);

var fullName = "Khizar Wakeel";
console.log(fullName);

var a = 5;
var b = 3;

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

a += 5;
console.log(a);

var age = 12;
var newAge = ++age;
console.log(age);
console.log(newAge);

var age = 12;
var newAge = age++;
console.log(age);
console.log(newAge);

var name = "Danial"
console.log(name);

var name = "Khizar";
console.log(name);

// Example 1

var question = "What is your name?";
var defaultAnswer = "Khizar";
var name = prompt(question, defaultAnswer);
console.log("Name = " + name);

var question = "What is your father name?";
var defaultAnswer = "Wakeel Ahmed";
var fatherName = prompt(question, defaultAnswer);
console.log("Father Name = " + fatherName);

var question = "What is your Age?";
var age = prompt(question);
var newAge = age + 5;
console.log("New Age = " + newAge);

var age = prompt("What is your age?");
var num = 4;
var sum = Number(age) + num;
console.log(sum);

console.log(Number(true));
console.log(Number(false));
console.log(Number("999"));
console.log(Number("Hello"));
console.log(Number("928 923"));

var a = 6;
var b = prompt("What is your age?");
var c = a + Number(b);
console.log(c);

var a = true;

console.log(a == 1);
console.log(a === 0);
console.log(a != 6);
console.log(a !== 6);
console.log(a > 6);
console.log(a < 6);
console.log(a >= 0);
console.log(a <= 0);

var a = 60;
var b = a < 100;
var c = !b;
var d = !(a < 100);
var e = !true;

console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);
console.log("D = " + d);
console.log("E = " + e);

var a = 5;
var b = !a;
var c = !!a;

console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);

var age = 12;

if (age > 9) {
    console.log("A = " + age);
}

var age = prompt("What is your age?");

if (age >= 18) {
    alert("Qualifies for Driving!");
}
else {
    alert("Does not qualify for driving!");
}

var score = prompt("What is your score?");

score = Number(score);

if (score >= 80 && score <= 100) {
    console.log("Grade A1");
    if (score >= 90 && score <= 100) {
        console.log("Reward $100")
    }
    else if (score >= 80 && score <= 89) {
        console.log("Reward $50");
    }
    else if (score >= 70 && score <= 79) {
        console.log("Reward $20");
    }
    else {
        console.log("Reward $50");
    }
}
else if (score >= 80 && score <= 89) {
    console.log("Grade A");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C");
}
else if (score >= 50 && score <= 59) {
    console.log("Grade D");
}
else {
    console.log("Failed");
}

var input = prompt("Please write any other Vowel!");

if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
    console.log("Welldone! " + input + " is a Vowel!");
}
else if (input === "1" || input == "2" || input == "3" || input == "4" || input == "5" || input == "6" || input == "7" || input == "8" || input == "9" || input == "10") {
    console.log("Sorry! " + input + " is a Number!");
}
else {
    console.log("Sorry! " + input + " is a Consonant!");
}

// Examples && and || Logical Operator

var a = 0;
var b = 8;

var c = " " || true || "cat";
console.log("C = " + c);

// For Loop and Arrays

for (; ;) {
    console.log("Hello World");
}

for (var i = 0; i < 5; i++) {
    console.log("I = " + i);
}

for (var i = 10; i > 0; i--) {
    console.log("I = " + i);
}

console.log("After Loop");

var num = Number(prompt("Please enter your table number!"));

for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

for (var i = 0; i <= 8; i++) {
    if (i == 4) {
        break;
    }
    console.log("I = " + i + ";");
}

console.log("Finding Prime Numbers, is Number is Prime or Not?")

var num = Number(prompt("Please enter prime number!"));
var isPrime = true;

for (var i = 2; i < num; i++) {
    var result = num % i;
    if (result == 0) {
        console.log(num + " is not a Prime Number! Divided by " + i + ".");
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Welldone! " + num + " is Prime Number! Divided by " + i + ".");
    console.log("Note: It can not be divisibled by any other number it can be divisibled by it's own number " + i + ".");
}
console.log("Hello World");
console.log("Before Loop code executed!");
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("I = " + i + " J = " + j);
    }
}
console.log("After Loop code will execute!");
console.log(3 * 6);

// Generate Triangle Output!

for (var i = 1; i < 8; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write("<br />");
}

var foods = ["Burger", "Sandwich", "Roll"];
console.log(foods);

var foods1 = new Array(45);

console.log(foods1.length);

foods = [45, "Burger", true, { name: "Khizar" }, null];
console.log(foods);

var a1 = [0];
console.log(a1);

console.log(foods[3]);
console.log(foods[4]);

console.log(foods);

var arr = [];
console.log(arr);
arr[0] = "Pizza";
arr[1] = "Burger";
arr[2] = true;
arr[3] = 56;
arr[4] = { name: "Khizar" };
console.log(arr);

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[2] = false;
arr[3] = { name: "Khizar" };
arr[8] = "Khizar Wakeel";

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr);

var foods = ["Roll", "Sandwitch", "Burger"];
console.log(foods.length);

var foods = [];
console.log(foods.length);

var foods = [];
console.log(foods);

foods.push("Sandwitch", "Burger", "Roll", "Hot Dog", "Pizza");
console.log(foods);

var foods = [prompt("Please Enter Your Foods!"), prompt("Please Enter Your Foods!"), prompt("Please Enter Your Foods!")
    , prompt("Please Enter Your Foods!"), prompt("Please Enter Your Foods!")];

// foods.push(prompt("Please Enter Your Foods!"));
// foods.push(prompt("Please Enter Your Foods!"));
// foods.push(prompt("Please Enter Your Foods!"));
// foods.push(prompt("Please Enter Your Foods!"));
// foods.push(prompt("Please Enter Your Foods!"));

console.log(foods);
console.log(foods[2]);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Sanwitch");
console.log("Foods Array Length = " + foods.length);
console.log(foods);

var a1 = foods.pop();
var a2 = foods.pop();
console.log(foods);
console.log("Foods Array Length = " + foods.length);
console.log(a1);
console.log(a2);

foods.push("Burger");
console.log(foods);
console.log("Foods Array Length = " + foods.length);

var a3 = foods.pop();
console.log(foods);
console.log("Foods Array Length = " + foods.length);
console.log(a3);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Sandwitch");
console.log(foods);
console.log("Foods Array Length = " + foods.length);

console.log(foods.shift());
console.log(foods.shift());
console.log(foods);
console.log("Foods Array Length = " + foods.length);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Sandwitch");
console.log(foods);
console.log("Foods Array Length = " + foods.length);
console.log(foods[0]);
foods.unshift("Roll");
console.log(foods[0]);
console.log(foods);
console.log("Foods Array Length = " + foods.length);
console.log(foods[1]);

var foods = ['Roll', 'Pizza', 'Burger', 'Sandwitch', 'Biryani', 'Pulao', 'Gola Kabab', 'Nihari',
    'Tikka', 'Malai Botti', 'Qurma', 'Karahi'];
console.log("");
console.log("Foods Array Length = " + foods.length);
console.log("");

for (var i = 0; i < foods.length; i++) {
    console.log("Available Foods = " + foods[i]);
}

console.log("");

var arr = [4, 78, 54, 5, 6];

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = i * 4;
}
for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

var arr = [34, 23, 56, 87, 1, 45, 93, 89, 13];

var input = Number(prompt('Enter "Item" or "Number to find in Array!"'));

console.log("Array Length => " + arr.length);

console.log("User Input => " + input);

var found = true;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
        console.log(input + " Found in Array on Index => " + i);
        found = false;
        break;
    }
}
if (found) {
    console.log("Sorry! " + input + " Not Found in Array!");
}

console.log("Before ======>");

var foods = ["Pizza", "Burger", "Sandwitch", "Tikka", "Biryani", "Karahi"];

console.log(foods);

console.log("After =======>");

foods.splice(1, 2, "Roll");
console.log(foods);

var foods = ["Pizza", "Burger", "Sandwitch", "Tikka", "Biryani", "Karahi"];

console.log("Foods");

var arr = foods.splice(1, 2, "Sanwitch");
console.log(foods);
console.log(arr);

var foods = ["Pizza", "Burger", "Sandwitch", "Tikka", "Biryani", "Karahi", "Qurma", "Roll"];

console.log(foods);

var arr = foods.slice(2);

console.log(foods);

console.log(arr);

var keyValuePair = { firstName: "Khizar", lastName: "Wakeel" };
console.log(keyValuePair);

var a = "To be or not to be";
var b = a.charAt(7);
console.log(b);

var arr = ["To", "be", "or", "not", "to", "be"];
console.log(arr);

var a = ["To be or not to be"];
console.log(a);

var date = new Date(0);
console.log(date);

var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var date = new Date();
console.log("Current Date & Time = " + date);

var Day = date.getDay();
console.log(Day);

var nameOfDay = dayList[Day];
console.log(nameOfDay);

let password = prompt("Enter a password:");

while (true) {
    let containsAlpha = false;
    let containsNum = false;
    let startsWithAlpha = false;

    // Check if password contains alphabets and numbers
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
            containsAlpha = true;
        } else if (charCode >= 48 && charCode <= 57) {
            containsNum = true;
        }
        if (i === 0 && (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
            startsWithAlpha = true;
        }
    }

    // Check if password meets the requirements
    if (containsAlpha && containsNum && !startsWithAlpha && password.length >= 8) {
        console.log("Valid password entered!");
        break;
    } else {
        password = prompt("Enter a valid password (must contain alphabets and numbers, must not start with a number, and must be at least 8 characters long):");
    }
}

var name = "";
console.log(name);

var a = "Hello World";
console.log("Str Variable Length is = " + a.length);

var message = "Hello \"World\""; // For Double Quotes
console.log(message);

var message = "Hello \'World\'"; // For Single Quotes
console.log(message);

var message = "Hello \\World\\"; // For Slash
console.log(message);

var message = "Hello \nWorld"; // For New Line
console.log(message);

var message = "Hello \tWorld"; // For Tabing
console.log(message);

var food = "SANDwItch";
console.log("Before Update = " + food);
var updatedFood = food.toUpperCase();
console.log("After Updated = " + updatedFood);

var food = prompt("Please enter first food!");
var input = prompt("Please enter Second food!");
console.log(food.toLowerCase());
console.log(input.toUpperCase());

if (food.toLowerCase() === input.toLowerCase()) {
    console.log("Matched");
}
else {
    console.log("Not Matched");
}

var a = "Hello World";
var b = a.slice(-9, -3);
console.log(b);
console.log("Hello World");

var a = "To be or not to be";
console.log("Length = " + a.length);
var b = a.lastIndexOf("be");
console.log(b);

// CharAt() Function

var a = "To be or not to be";
console.log("Length = " + a.length);
var b = a.charAt(16);
console.log(b);

var a = ["To", "be", "or", "not", "to", "be"];

var b = a.CharAt(4);
console.log(b); 0

var str = "To be or not to be";
var b = str.replace("be", "Hello");
console.log(str);
console.log(b);
console.log("<===========G flag============>");
var str = "To be or not to be";
var b = str.replace(/be/g, "Hello");
console.log(str);
console.log(b);
var str = "To be or not to be";
var b = str.replace("to", "Hello");
console.log(str);
console.log(b);
console.log("<===========I flag============>");
var str = "To be or not to be";
var b = str.replace(/to/i, "Hello");
console.log(str);
console.log(b);
console.log("<===========G & I flag============>");
var str = "To be or not to be";
var b = str.replace(/to/gi, "Hello");
console.log(str);
console.log(b);

var str = "To be or not to be";
var b = str.split(" ");
console.log(b);

var str = "To,be or|not to,be";

var a = str.split(",");
console.log(a);
console.log("Str Length = " + a.length);
var b = str.split("|");
console.log(b);
console.log("Str Length = " + b.length);
var c = str.split(" ");
console.log(c);
console.log("Str Length = " + c.length);

var average = (15 + 23 + 87) / -3;
console.log(average);

var roundedAverage = Math.round(average);
console.log(roundedAverage);

var userInput = Number(prompt("Please guess the right number!"));

var randomNumber = Math.random();
// console.log("Random Number = " + randomNumber);

var randomMultiplication = randomNumber * 6;
// console.log("Random Multiplication to 6 = " + randomMultiplication);

var addingNumber1 = randomMultiplication + 1;
// console.log("Adding Number 1 = " + addingNumber1);

var dice = Math.floor(addingNumber1);
console.log("Right Number is = " + dice + ".");

if (dice === userInput) {
    console.log("Well done! you guessed the right number " + dice + ".");
}
else {
    console.log("Sorry! you did not guess the right number, your number is " + userInput + ".");
}

var average = (15 + 23 + 39) / 3;
var avrge = average.toFixed(3);
console.log(avrge);

var date = new Date();
console.log(date);

var date = new Date();
console.log(date);
var date = new Date("2019/9/8 10:15:15");
console.log(date);

var date = new Date();
console.log(date);
date.setDay(4);
console.log(date);

var date = new Date();
console.log(date);

console.log("Day = " + date.getDay());
console.log("Month = " + date.getMonth());
console.log("Year = " + date.getFullYear());

date.setDate(13);
date.setMonth(6);
date.setFullYear(2024);

console.log("Day = " + date.getDay());
console.log("Month = " + date.getMonth());
console.log("Year = " + date.getFullYear());

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dayList);

var date = new Date();
console.log(date);

date.setDate(13);

var day = date.getDay();
console.log(day);

var nameOfDay = dayList[day];
console.log(nameOfDay);

var date1 = new Date("July 1 2017 00:00:00");
var date2 = new Date("Apr 12 2023 00:00:00");

console.log("Date1 = " + date1);
console.log("Date2 = " + date2);

var timeDiff = date2.getTime() - date1.getTime();
console.log("TimeDiff = " + timeDiff);

var timeInDay = 24 * 60 * 60 * 1000;
console.log("TimeInDay = " + timeInDay);

var timeInYear = timeInDay * 365;
console.log("TimeInYear = " + timeInYear);

var daysdiff = timeDiff / timeInDay;
console.log("DaysDiff = " + daysdiff);

var yearsDiff = timeDiff / timeInYear;
console.log("YearsDiff = " + yearsDiff);

console.log(yearsDiff.toFixed(1));

function showMessage() {
    console.log("Hello World");
}

showMessage();

var hoisting = "This is Hoisting";

function showMessage(fName, lName) {
    return fName + " " + lName;
}

function sum(a, b) {
    console.log(a + b);
}
sum(9, 8);

function showMessage(message) {
    console.log(message);
}
showMessage("Hello World");

function sum(a, b) {
    console.log(a * b);
}
sum(5, 10);

function withoutInputFunction() {
    console.log("Hello World");
}
withoutInputFunction();

function sum(a, b) {
    console.log(a - b);
}

sum(87, 78);

function multiply(num1, num2) {
    var num3 = num1 * num2;
    console.log("Num3 = ", num3);
}

multiply(3, 5);
multiply(4, 8);

function showMessage(name) {
    document.write("Hello, ", name);
}

showMessage("Khizar! How are you doing?");

function showMessage(name) {
    console.log("Wellcome to our Website! =", name);
}
showMessage(prompt("What is your name?"));

function sum(a, b) {
    console.log(a + b);
}
sum(12, 42);
sum(6, 6);
sum(true)

function findGrade(score) {
    if (score > 80 && score <= 100) {
        console.log("Grade A");
    }
    else if (score > 70 && score <= 80) {
        console.log("Grade B");
    }
    else if (score > 60 && score <= 70) {
        console.log("Grade C");
    }
    else {
        console.log("Grade F");
    }
}

findGrade(89);
findGrade(60);
findGrade(40);

function test() {
    console.log("Hello World");
}
var a = test();
console.log("First Function =", a);

function test1() {
    return 45;
}
var a = test1();
console.log("Function Return =", a);

function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 6);
var b = multiply(4, 2);
console.log(a);
console.log(b);
console.log(multiply(2, 5));

function multiply(num1, num2) {
    return num2;
    return num1 * num2;
}
var a = multiply(3, 6);
var b = multiply(4, 2);
console.log(a);
console.log(b);
console.log(multiply(2, 5));

function calculateScore(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}
function findGrade(score) {
    if (score > 80 && score <= 100) {
        document.write("<font size ='20px' color ='red'>", "Grade A", "<br />", "</font>");
        if (score >= 90 && score <= 100) {
            document.write("<font size ='20px' color ='red'>", "Reward $1000", "<br />", "</font>");
        }
        else if (score > 80 && score < 90) {
            document.write("<font size ='20px' color ='red'>", "Reward $500", "<br />", "</font>");
        }
        else {
            document.write("<font size ='20px' color ='red'>", "Welldone!", "<br />", "</font>");
        }
    }
    else if (score > 70 && score <= 80) {
        document.write("<font size ='20px' color ='red'>", "Grade B", "<br />", "</font>");
    }
    else if (score > 70 && score <= 80) {
        document.write("<font size ='20px' color ='red'>", "Grade C", "<br />", "</font>");
    }
    else {
        document.write("<font size ='20px' color ='red'> Grade F <br /></font>");
    }
}

var result = Math.round(calculateScore(Number(prompt("Please enter your Eng sub score 1")),
    Number(prompt("Please enter your Math sub score 2")), Number(prompt("Please enter your CS sub score 3"))));

document.write("<font size ='20px' color ='red'>", "Result = ", result + "%", "<br />", "</font>");

findGrade(result);

function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 4) + 5;
console.log(a);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return multiply(a, b) + b;
}
var total = sum(3, 4) + 6;
console.log(total);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return a + b;
}
var total = sum(multiply(3, 4), 2) + 6;
console.log(total);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return multiply(a, b) + b;
}

var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 5);

console.log("Multiply =", mul);
console.log("Addition =", add);

var a = 7;

function sum() {
    var b = 6;
    var c = a + b;
    console.log("C =", c);
}
sum();
console.log("A =", a);

var a = 7;  // Global Variable
console.log("A =", a);

function sum() {
    var b = 6;
    a = b + 5;
    console.log("A =", a);
}

sum();

console.log("Hello World");

console.log("A =", a);
console.log("B =", b); // B is not defined because B is a Local Variable

var a = 7;  // Global Variable
console.log("A =", a);
console.log("Accessing (A) Before Function");

function sum() {
    var b = 6;
    a = b + 5;
    console.log("A =", a);
    console.log("Accessing (A) Inside the Function");
    console.log("B =", b);
    console.log("Accessing (B) Inside the Function");
}

sum();

console.log("Accessing (A) After Function");
console.log("A =", a);
console.log("B =", b);  // ("Accessing (B) Outside the Function");

var a = 7;
console.log("A =", a);
function sum() {
    var a = 6;
    console.log("A =", a);
    a = 3 + 2;
    console.log("A =", a);
}
sum();
console.log("A =", a);

a = 7;

function sum() {
    var b = 6;
    a = b + 5;
    console.log("A =", a);
}

sum();
console.log("A =", a);

a = 7;
console.log("A =", a);
function sum() {
    b = 6;
    a = b + 5;
    console.log("A =", a);
    console.log("B =", b);
}
sum();
console.log("B =", b);
console.log("A =", a);

a = 7;

function sum() {
    b = 7;
    a = b + 1;
}

console.log("A before calling =", a);
// console.log("B before calling =", b);

sum();

console.log("A after calling =", a);
console.log("B =", b);

var sum = function (a, b) {
    return a + b;
};
var c = sum(4, 5);
console.log("C =", c);

var square = function (num) { return num * num; };
console.log(square);
var b = square(6);
console.log(b);

var c = sum(6, 9);
console.log("Total Sum =", c);

function sum(a, b) {
    return a + b;
}

console.log("Before =", a + ";");

a = 6;

console.log("After =", a + ";");

var mul = multiply(3, 2);
console.log("Mul =", mul);

var add = sum(4, 5);
console.log("Add =", add);

// console.log(sum(4, 5));

// console.log("Sum =", sum);

function multiply(num1, num2) {
    return num1 * num2;
}

var sum = function (a, b) {
    return a + b;
};

// Argument Passed by Value:

var num = 5;

function changeValue(a) {
    console.log(a);

}
changeValue(num);
console.log(num);

// Argument Passed by Refference:

var arr = [4, 6, 7, 9];
console.log("Before Function =", arr);
function updateArray(val) {
    console.log("Before Update =", val);
    val[1] = 57;
    console.log("After Update =", val);
}
console.log(arr[1]);
updateArray(arr);
console.log(arr[1]);

var obj = { name: "John", age: 56 };

function updateObject(val) {
    val.age = 40;
}
console.log(obj);
updateObject(obj);
console.log(obj.age);

var a = [45, 5, 9, 2];
console.log("A Before =", a);
b = 6;

function test(val) {
    console.log("Val before =", val);
    console.log(b);
    var val = [2, 1, 8, 3];
    val[2] = 88;
    console.log("Val after =", val);
}
test(a);
console.log("A after =", a);
console.log("Val =", val); // This Array is not Available on Outside!

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
factorial(5);
console.log(factorial(5));

// Above Code will execute like this!

1 * factorial(1 - 1); 1
2 * factorial(2 - 1); 2
3 * factorial(3 - 1); 6
4 * factorial(4 - 1); 24
5 * factorial(5 - 1); 120  // Result

var num = 6;
var factorial = 1;

for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
}
//      Before              After
// factorial = 1 * 1;  =>   1 * 1
// factorial = 2 * 1;  =>   2 * 1
// factorial = 3 * 1;  =>   3 * 2
// factorial = 4 * 1;  =>   4 * 6
// factorial = 5 * 1;  =>   5 * 24
// factorial = 6 * 1;  =>   6 * 120
// The execution will come top to Bottom:

console.log("6 Factorial =", factorial);

var day = Number(prompt("Please type the number to check the day!"));

switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Enter the valid week day!");
        break;
}

var age = Number(prompt("Please type your age!"));

switch (true) {
    case (age >= 21 && age <= 30):
        console.log("You are Eligible");
        break;
    default:
        console.log("You are not Eligible");
}

var day = 6;

switch (day) {
    case 6:
        console.log("Today is Saturday");
    case 0:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to Weekend!");
        break;
}

var x = 0;

switch (x) {
    case 0:
        console.log("On");
        break;
    case 1:
        console.log("On");
        break;
    default:
        console.log("No Value Found");
}

var day = 6;

switch (day) {
    case 6:
    case 0:
    case 5:
        console.log("Yaaahh! It's weekend");
        break;
    default:
        console.log("Looking Forward to the weekend");
}

var i = Number(prompt("Please Enter Number!"));

while (i <= 10) {
    console.log("I = " + i);
    i++
}

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

var i = 0;

do {
    console.log("I =", i);
    i++;
}
while (i < 10);

var i = 0;

do {
    console.log("I =", i);
    i++
}
while (i < 0);

var doContinue = true;

while (doContinue) {
    console.log("Welcome to GTA Vice City");
    var input = prompt("Please enter Y to run again or any key to stop");
    if (input.toLowerCase() !== "y") {
        doContinue = false;
    }
}
console.log("You have exit from the Game!");

// Core JavaScript Practice # 2

alert("Thanks for your input!");

console.log("Hello World");

document.write("<h4>This is document.write Example via HTML5.</h4>");

var nationality = "Pakistani";
var age = 25;
var isFeePaid = true;
var weight = 60.55;

var age = 25;

var age;
age = 25;

var age = 45;
var nationality = "Pakistan";
var isFeePaid = true;

console.log(nationality);
console.log(age);

age = 23;
console.log(age);

console.log(Symbol("Hey How are you doing?"));

var name = "Khizar";
console.log(name);
name = "Wakeel";
console.log(name);

var name = "Khizar";
console.log(name);

var message = "Hello It's me!";
console.log(message);

var message = '"Who let the dogs out?"'
console.log(message);

var name = "Mark";
console.log(name);

name = "Ace";
console.log(name);

var nationality;
nationality = "U.S.";
console.log(nationality);

var age = 25;
var weight = 150.5;
var newWeight = weight + 20;

var sum = 12 + 5;
console.log(sum);
var a = 5;
var b = 10;
var c = a + b;
console.log(c);

var isFeePaid = true;
var examPassed = false;

console.log(isFeePaid);
console.log(examPassed);

var firstName = 23;
var lastName;
console.log(lastName, firstName);

var name = null;
console.log(name);

var name = "Khizar";
console.log(name);

name = null;
console.log(name);

var age = 34;
var name = "Hello";
var isFeePaid = false;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isFeePaid);

num = 56;
console.log(typeof num);

num = "Hello";
console.log(typeof num);

var a = 5;
var b = 3;

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

var a = 5;
console.log(a);

a = a + 2;
console.log(a);

// or

var a = 5;
console.log(a);

a += 5;
console.log(a);

a -= 2;
console.log(a);

var a = 5 + 2 * 3 - 2 / 2;
console.log(a);

Prefix

var age = 12;
++age;

console.log(age);

--age;
console.log(age);

// Postfix

var age = 12;
age++;

console.log(age);

age--;
console.log(age);

// No Difference

// Prefix & Postfix Increment

var age = 12;
var newAge = ++age;

console.log(age);
console.log(newAge);

var age = 12;
var newAge = age++;

console.log(age);
console.log(newAge, "See the Difference");

// Prefix & Postfix Decrement

var age = 12;
var newAge = --age;

console.log(age);
console.log(newAge);

var age = 12;
var newAge = age--;

console.log(age);
console.log(newAge);

var firstName = "Khizar";
var lastName = "Wakeel";
var fullName = firstName + " " + lastName;
console.log(fullName);

var _name = "khizar";
console.log(_name);

var firstName = "Khizar";
var lastName = "Wakeel";
var fullName = firstName + " " + lastName;
console.log(fullName);

var question = "What is your Name?";
var defaultAnswer = "Khizar";
var yourName = prompt(question, defaultAnswer);
console.log(yourName);

var question = "What is your age?";
var age = prompt(question);
var newAge = age + 2;

console.log("NewAge =", newAge);

var age = prompt("What is your age?");
var num = 4;
var sum = Number(age) + num;
console.log(sum);

var a = 6;
var b = prompt("What is your age?");
var c = a + Number(b);
console.log(c);

var a = 60;
var b = a > 50 && a < 70 && a > 58;
console.log(b);

var c = 80;
var d = c > 50 && c < 70;
console.log(d);

var a = 60;
var b = a < 50 || a > 70;
console.log(b);

var c = 80;
var d = c < 50 || c > 70;
console.log(d);

var a = 60;
var b = a < 100;
var c = !b;
var d = !(a < 100);
var e = !true;

console.log("A =", a);
console.log("B =", b);
console.log("C =", c);
console.log("D =", d);
console.log("E =", e);

var a = -5;
var b = !a;
var c = !!a;

console.log("A = ", a);
console.log("B = ", b);
console.log("C = ", c);

var age = 12;

if (age > 9) {
    console.log("Age =", age);
}

var age = prompt("What is your age?");
if (age >= 18) {
    console.log("Qualifies for driving");
}
else {
    console.log("Does not qualify for driving");
}

var score = prompt("What is your Score?");

if (score > 80) {
    console.log("Grade A");
}
else if (score > 70) {
    console.log("Garde B");
}
else if (score > 60) {
    console.log("Garde C");
}
else {
    console.log("Failed");
}

var score = 100;

if (score >= 80) {
    console.log("Garde A");
    if (score > 90) {
        console.log("Reward $100");
    }
    else if (score > 85) {
        console.log("Reward $50");
    }
    else {
        console.log("Reward $20");
    }
}
else {
    console.log("Failed");
}

var score = prompt("What is your Score?");

if (score >= 89 && score <= 100) {
    console.log("Garde A++");
}
else if (score >= 79 && score <= 89) {
    console.log("Garde A");
}
else if (score >= 69 && score <= 79) {
    console.log("Garde B");
}
else if (score >= 59 && score <= 69) {
    console.log("Garde C");
}
else {
    console.log("Failed");
}

var input = prompt("Please write any other Vowel");

if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
    console.log("Welldone", input, "is a Vowel");
}
else {
    console.log("Sorry", input, "is a Consonant");
}

var name = "";
if (name) {
    console.log("In If name =", name);
}
else {
    console.log("In else name =", name);
}

var a = 0;
var b = 8;

var c = true && 0 && "cat";
console.log("C = " + c);

var a = 0;
var b = 8;

var c = " " || false || "cat";
console.log("C = " + c);

for (var i = 0; i < 3; i++) {
    console.log(i);
}

for (var i = 5; i <= 8; i++) {
    console.log(i);
}

for (var i = 0; i < 5; i++) {
    console.log(i);
}

for (var i = 10; i > 0; i--) {
    console.log(i);
}

// With Hard coded!

var tableNum = Number(prompt("Write Table Number!"));

console.log(tableNum + " x 1 = " + (tableNum * 1));
console.log(tableNum + " x 2 = " + (tableNum * 2));
console.log(tableNum + " x 3 = " + (tableNum * 3));
console.log(tableNum + " x 4 = " + (tableNum * 4));
console.log(tableNum + " x 5 = " + (tableNum * 5));
console.log(tableNum + " x 6 = " + (tableNum * 6));
console.log(tableNum + " x 7 = " + (tableNum * 7));
console.log(tableNum + " x 8 = " + (tableNum * 8));
console.log(tableNum + " x 9 = " + (tableNum * 9));
console.log(tableNum + " x 10 = " + (tableNum * 10));

var num = 1;

for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// For Loop Application

var tableNum = Number(prompt("Write Table Number!"));

for (var i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

for (var i = 0; i < 8; i++) {
    if (i == 4) {
        break;
    }
    console.log("I = " + i);
}

for (var i = 0; i < 8; i++) {
    if (i == 4) {
        continue;
    }
    console.log("I =", i);
}

var num = Number(prompt("Please enter Number"));
var isPrime = true;

for (var i = 2; i < num; i++) {
    var result = num % i;
    if (result == 0) {
        console.log(num + " is not a Prime Number!");
        console.log("Divisibled by " + i);
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(num + " is a Prime Number!");
    console.log("Note: It can't be divisibled by any other number it can be divisibled by It's own number " + i + ".");
}

console.log("Before Execution");
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log("I = " + i + " J = " + j);
    }
}
console.log("After Execution");

for (var i = 1; i < 8; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br />");
}

var height = 7;  // set the height of the triangle
for (var i = 0; i < height; i++) {  // iterate through each row
    var row = "";  // initialize an empty string for the current row
    for (var j = 0; j <= i; j++) {  // iterate through each column in the row
        row += "*";  // add a star to the current row
    }
    console.log(row);  // print the current row
}

// *
// **
// ***
// ****
// *****
// ******
// *******

var food = ["Pizza, Burger, Snacks"];
console.log(food);

var foods = new Array("Pizza, Burger, Snacks");
console.log(foods);

var foods = new Array(null);
console.log(foods);

var array = ["Pizza", "Burger", "Sandwitch"];
console.log(array);
var a = array[2];
console.log(a);

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);

var foods = ["Pizza", "Burger", "Snacks"];

console.log(foods[0]);
console.log(foods[2]);
console.log(foods[8]);

Add

var foods = [];

foods[0] = "Pizza";
foods[1] = "Burger";
foods[2] = "Snacks";

console.log(foods[0]);
console.log(foods[1]);

foods[8798] = true;
console.log(foods[8798]);

console.log(foods);

Update

var foods = ["Pizza", "Burger", "Snacks"];
console.log("Before", foods[1]);
foods[1] = "Sandwitch";
console.log("After", foods[1]);
foods[3] = "French Fries";
console.log(foods);

var foods = [];
console.log(foods);
foods[0] = "Pizza";
foods[1] = "Burger";
foods[2] = "Snacks";
console.log(foods);
console.log(foods[1]);
console.log(foods[5]);
foods[7] = "Sandwitch";
console.log(foods);
console.log(foods[4]);
console.log(foods[7]);

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods.length);

var arr = [];
console.log(arr.length);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Sandwitch");
foods.push("Snacks");
foods[5] = "Roll";
foods.push("Biryani");
console.log(foods);

var foods = [];
foods.push("Pizza", "Burger", "Snacks");
foods.push("Sandwitch");

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]);

var foods = [];

foods.push(prompt("Enter your first food item"));
foods.push(prompt("Enter your Second food item"));
foods.push(prompt("Enter your Third food item"));
foods.push(prompt("Enter your Fourth food item"));
console.log(foods);
console.log(foods[1]);

var a = 11;
console.log(a);
a++;
console.log(a);
a + 5;
console.log(a);

var name = "Khizar";

alert("Welcome ", name);
alert("Welcome " + name);

// Random Array

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[1]);

foods[1] = "Sandwitch";
console.log(foods[1]);

// Stack Array

var foods = [];

foods.push("Pizza");
foods.push("Sandwitch");
foods.push("Snacks");
console.log(foods);
console.log("Length =", foods.length);
var a1 = foods.pop();
var a2 = foods.pop();
console.log(foods);
console.log("Length =", foods.length);
console.log(a1);
console.log(a2);
foods.push("Burger");
console.log(foods);
console.log("Length =", foods.length);
var a3 = foods.pop();
console.log(foods);
console.log("Length =", foods.length);
console.log(a3);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods);
console.log("Length =", foods.length);
console.log(foods.shift());
console.log(foods.shift());
console.log(foods);
console.log("Length =", foods.length);

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods);
console.log("Length =", foods.length);
console.log("Index 0 =", foods[0]);
foods.unshift("Sanwitch");
console.log("Index 0 =", foods[0]);
console.log(foods);
console.log("Length =", foods.length);
console.log(foods[1]);

var foods = ["Pizza", "Burger", "Snacks"];

for (var i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

var arr = [4, 78, 54, 5, 6];

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = i * 4;
    // console.log(arr[i]);
}
for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

// Task Search in Array

var arr = ["Khizar", "Hassaan", "Ahad", "Ali", "Umer", "Abu Bakr"];
var input = prompt("Enter Item or Number to find in Array!");
console.log("Array Length =", arr.length);
console.log("User input =", input);
var found = true;
for (var i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === input.toUpperCase()) {
        console.log(input, "Found in Array on Index =", i);
        found = false;
        break;
    }
}
if (found) {
    console.log(input, "Not Found in Array");
}

var foods = "SandWiTch";
console.log(foods);
var updated = foods.toUpperCase();
console.log(updated);

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);
foods.splice(1, 0, "Sandwitch");
console.log(foods);

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);
foods.splice(1, 0, "Sanwitch", "Fries");
console.log(foods);

var foods = ["Pizza", "Burger", "Snacks"];
foods.splice(1, 2, "Sandwitch");
console.log(foods);

var foods = ["Pizza", "Burger", "Fries"];
console.log(foods);
var arr = foods.splice(2, 2, "Sandwitch", "Biryani", "Roll");
console.log(foods);
console.log(arr);

var foods = ["Pizza", "Burger", "Snacks", "Sandwitch", "Fries"];
console.log(foods);
var arr = foods.slice(1, 4);
console.log(foods);
console.log(arr);

var foods = ["Pizza", "Burger", "Snacks", "Sandwitch", "Fries"];
console.log(foods);
var arr = foods.slice(2);
console.log(foods);
console.log(arr);

var arr = ["Khziar", "Wakeel", "Ahad"];
console.log(arr);
console.log(arr.length);

arr[arr.length] = "Hassaan";
console.log(arr);
console.log(arr.length);

arr.shift(2);
console.log(arr);
console.log(arr.length);

var a = ["Khizar", "Ahad", "Osama", "Hassaan",];

var b = a.slice(1, 3, "Ahmed");

console.log(b);

console.log(a);

var text = "Hello World";
console.log(text);

var name1 = "John";
console.log(name1);

var name2 = 'Mark';
console.log(name2);

var a = "Hello World";
console.log("String =", a);
console.log("String Length =", a.length);

var a = "Hello \'World\'";
console.log(a);
var b = 'Hello \"Khizar\"';
console.log(b);

var c = "Hello\/World";
console.log(c);

var d = "Hello\tWorld";
console.log(d);

var d = "H\ne\nl\nl\no\nW\no\nr\nl\nd";
console.log(d);

var food = "SANDWich";
var updatedFood = food.toLowerCase();
console.log(food);
console.log(updatedFood);

var food = "SANDWich";
var updatedFood = food.toUpperCase();
console.log(food);
console.log(updatedFood);

var food = "Pizza";
var input = "piZZa";

console.log(food.toLowerCase());
console.log(food.toUpperCase());

var food = 'Pizza';
var userInput = prompt("Please enter your food");
var convertInput = userInput.toUpperCase();

if (food.toUpperCase() === userInput.toUpperCase()) {
    console.log("Thanks! Your", "'" + convertInput + "'", "Odered has been Placed Please wait...");
}
else {
    console.log("Sorry", "'" + convertInput + "'", "is not available");
}

var food = ["Pizza", "Burger", "Sandwich", "Roll", "Biryani"];
var userInput = prompt("Please enter your food!");

var found = true;

for (var i = 0; i < food.length; i++) {
    if (food[i].toLowerCase() === userInput.toLowerCase()) {
        var convertInput = userInput.toUpperCase();
        console.log("Thanks! Your '" + convertInput + "' order has been placed. Please wait...");
        found = false;
        break;
    }
}

if (found) {
    console.log("Sorry, '" + userInput + "' is not available");
}

var a = "Hello World";
var b = a.slice(6, 9);
console.log(a);
console.log(b);

var a = "Hello World";
var b = a.slice(6);
console.log(a);
console.log(b);

var a = "Hello World";
var b = a.slice(-7, -2);
console.log(b);

var a = "To be or not to be";
var b = a.indexOf("be");
console.log(b);

var a = "To be or not to be";
var b = a.indexOf("be", 10);
console.log(b);

var a = "To be or not to be";
var b = a.lastIndexOf("be");
console.log(b);

var a = ["Khizar", "Ahad", 45];
var b = a.indexOf(45);
console.log(b);

var a = "To be or not to be";
var b = a.lastIndexOf("be", 10);
console.log(b);

var a = "To be or not to be";
var b = a.charAt();
console.log(b);

var str = "To be or not to be";
var b = str.replace("be", "Hello");
console.log(b);
console.log(str);

var str = "To be or not to be";
var b = str.replace(/be/g, "Hello");
console.log(b);
console.log(str);

var str = "To be or not to be";
var b = str.replace(/to/i, "Hello");
console.log(b);
console.log(str);

var str = "To be or not to be";
var b = str.replace(/to/gi, "I");
console.log(b);

var str = "To be or not to be";
var b = str.split("");
console.log(str);
console.log(b);

var string = "To,be or|not to,be";
var a = string.split(",");
console.log(string);
console.log(a);

var string = "To,be or|not to,be";
var a = string.split(" ");
console.log(string);
console.log(a);

var string = "To,be or|not to,be";
var a = string.split("|");
console.log(string);
console.log(a);

var average = (15 + 23 + 39) / 3;
console.log(average);
var roundedAverage = Math.round(average);
console.log(roundedAverage);

var f = Math.round(-4.6);
console.log(f);

var f = Math.ceil(4.7);
console.log(f);

var f = Math.floor(-4.3);
console.log(f);

var num = Math.random();
console.log(num);

var num1 = Math.random();
var num2 = (num1 * 6) + 1;
var dice = Math.floor(num2);
console.log(dice);

var a = Math.random();
console.log("A = ", a);

var num1 = a * 6;
console.log("A x 6 =", num1);

var num2 = num1 + 1;
console.log("After Multiplication = ", num2);

var dice = Math.floor(num2);
console.log("Dice =", +dice);

var average = (15 + 23 + 39) / 3;
console.log(average);

var avr = average.toFixed(3);
console.log(avr);

var date = new Date();
console.log(date);

var dateObject = new Date();
console.log("Date Object =", dateObject);

var dateObject = new Date("January 12 2029 10:15:15");
console.log("Date Object =", dateObject);

var date = new Date();
var millisecondsCal = date.getTime();
console.log(millisecondsCal);

var date = new Date("1972");
console.log(date);

var getDateComponents = date.getTime();
console.log(getDateComponents);

var date = new Date();
console.log(date);

console.log("Get Full Year =", date.getFullYear());
console.log("Get Month =", date.getMonth());
console.log("Get Date =", date.getDate());
console.log("Get Day =", date.getDay());
console.log("Get Hours =", date.getHours());
console.log("Get Minutes =", date.getMinutes());
console.log("Get Seconds =", date.getSeconds());
console.log("Get Milliseconds =", date.getMilliseconds());
console.log("Get Time =", date.getTime());

var date = new Date();
console.log(date);

date.setDate(0);
console.log(date);

var date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

date.setFullYear(2020);
date.setHours(15);
date.setDate(2);
console.log(date);

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
console.log(date);
var day = date.getDay();
console.log("Day in Number =", day);
var nameOfDay = dayList[day];
console.log("Before Day =", nameOfDay);
date.setDate(4);
var newDay = date.getDay();
console.log("Updated Day in Number =", newDay);
var nameofDayUp = dayList[newDay];
console.log("After Updated Day =", nameofDayUp);
console.log(date);

var date1 = new Date("jun 2017");
var date2 = new Date();
console.log("Date1 =", date1);
console.log("Date2 =", date2);

var timeDiff = date2.getTime() - date1.getTime();
console.log("TimeDiff =", timeDiff);

var timeInDay = 24 * 60 * 60 * 1000;
console.log("TimeInDay =", timeInDay);

var daysdiff = timeDiff / timeInDay;
console.log("DaysDiff =", Math.round(daysdiff));

var date1 = new Date("jun 2017");
var date2 = new Date(" may 31 2023 10:27:36 GMT+0500 (Pakistan Standard Time)");
console.log("Date1 =", date1);
console.log("Date2 =", date2);

var timeDiff = date2.getTime() - date1.getTime();
console.log("TimeDiff =", timeDiff);

var timeInYear = (24 * 60 * 60 * 1000) * 365;
console.log("TimeInYear =", timeInYear);

var yearsdiff = timeDiff / timeInYear;
console.log("YearsDiff =", yearsdiff.toFixed(1));

var firstName = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rang"];
var lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
var firstNameAndLastName = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
        console.log(firstName[i] + " = " + lastName[j]);
        // firstNameAndLastName.push(firstName[i] + " " + lastName[j]);
    }
}

console.log("firstNameAndLastName =", firstNameAndLastName);

var cleanestCities = ["karachi", "lahore", "queta", "peshawar", "multan", "hyderabad", "Mirpur"];
var city = prompt("Enter Your City Name!");
city = city.toLowerCase();
var flag = true;
for (var i = 0; i < cleanestCities.length; i++) {
    if (cleanestCities[i] === city) {
        console.log("Yes it's!", "Find on Index", i);
        flag = false;
        break;
    }
}
if (flag) {
    console.log("This is not clean!")
}

// Print First Name With all Last Names

var firstName = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rang"];
var lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
var firstNameAndLastName = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
        console.log(firstName[i] + " = " + lastName[j]);
        firstNameAndLastName.push(firstName[i] + " " + lastName[j]);
    }
}

console.log("firstNameAndLastName =", firstNameAndLastName);

// Print First Name & Last Name

var firstName = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rang"];
var lastName = ["Zzz", "Burp", "Dogbone", "Droop", "Colic"];

for (var i = 0; i < firstName.length; i++) {
    console.log(firstName[i] + " = " + lastName[i]);
}

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

var string = `"loremsdfdkfdsdkfmnsdlkvmndskvnsdmkfnvdskf
fkdsfdskfdkfdskfdskfjskdfsdknvdsjkvndkvnsdksv
fksdfkdsfdskfmdskmsdkvmksdnvsdkvnsdkvndskvnsdkvndsks"`;
console.log(string);

var text = `The New Yorker magazine doesn't allow the phrase "World War II". They say it should
be "the Second World War." So let's search the following sentence for the banned characters
and replace them with the phrase that the New Yorker prefers.
It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.`;

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        var text2 = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text2);
    }
}

var text = `The New Yorker magazine doesn't allow the phrase "World War II". They say it should
be "the Second World War." So let's search the following sentence for the banned characters
and replace them with the phrase that the New Yorker prefers.
It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.`;

var searchPhrase = "World War II";
var replacementPhrase = "the Second World War";

var i = text.indexOf(searchPhrase);
while (i !== -1) {
    var text2 = text.slice(0, i) + replacementPhrase + text.slice(i + searchPhrase.length);
    text = text2;
    i = text.indexOf(searchPhrase);
}

console.log(text);

var text = Math.random();
console.log(text);

var arr = [82, 2971, 827];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], "1st", i);
    for (var j = 0; j < arr.length; j++) {
        console.log(arr[j], "2nd", j);
    }
}

var date = Date();
console.log(date);

console.log(date);

Functions

function sum(a, b) {
    console.log(a + b);
}

sum(5, 8);

function showMessage(message) {
    console.log(message);
}

showMessage("Hello World");

function sum(a, b) {
    console.log(a + b);
}
sum(5, 7);

function sum(showMessage, hello) {
    console.log(showMessage, hello);
}
sum("Hello World", 89);

console.log("Before Function");
function showMessage() {
    console.log("Hello World");
}
console.log("After Function");
showMessage();
console.log("After Function call");

function withoutInputFunction() {
    console.log("Hello World");
}

withoutInputFunction();

function multiply(num1, num2) {
    var num3 = num1 * num2;
    console.log("Num3 =", num3);
}
multiply(3, 6);
multiply(4, 7);

function showMessage(name) {
    console.log("Hello =", name);
}
// showMessage("Mike");
// showMessage("Khizar");

showMessage(prompt("Type of your name!"));

function showMessage(name) {
    console.log("Hello", name);
}
showMessage("Khizar");
showMessage(45);
showMessage(true);
showMessage();
showMessage(42, true, "Khizar");

function sum(a, b) {
    console.log(a + b);
}

sum(4, 5);
sum(6, 1);
sum("Khizar ");

function findGrade(score) {
    if (score >= 80 && score <= 100) {
        console.log("Grade A");
        if (score >= 90 && score <= 100) {
            console.log("Reward $100");
        }
    }
    else if (score >= 70 && score <= 79) {
        console.log("Grade B");
    }
    else if (score >= 60 && score <= 69) {
        console.log("Grade C");
    }
    else if (score >= 50 && score <= 59) {
        console.log("Grade D");
    }
    if (score > 100) {
        console.log("Sorry Your Score is out of Range!")
    }
    else {
        console.log("Failed");
    }
}

findGrade(prompt("What is your score!"));

function test() {

}
var a = test();
console.log(a);

function test() {
    return 45;
}
var a = test();
console.log("Fucntion returned =", a);

function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 6);
var b = multiply(4, 2);

console.log(a);
console.log(b);

console.log(multiply(2, 5));

function multiply(num1, num2) {
    return num2;
    return num1 * num2;
}
var a = multiply(3, 6);
console.log(a);

function calculateScore(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}
function findGrade(score) {
    if (score >= 80 && score <= 100) {
        console.log("Grade A");
        if (score >= 90 && score <= 100) {
            console.log("Reward $100");
        }
    }
    else if (score >= 70 && score <= 79) {
        console.log("Grade B");
    }
    else if (score >= 60 && score <= 69) {
        console.log("Grade C");
    }
    else if (score >= 50 && score <= 59) {
        console.log("Grade D");
    }
    else {
        console.log("Failed");
    }
    if (score > 100) {
        console.log("Sorry Your Score is out of Range!")
    }
}

var score = calculateScore(Number(prompt("Enter Your Computer Science Subject Score!")), Number(prompt("Enter Your English Subject Score!")), Number(prompt("Enter Your Math Subject Score!")));

console.log("Score =", Math.round(score));

findGrade(score);

function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 4) + 5;
console.log(a);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return multiply(a, b) + b;
}
var total = sum(3, 4) + 6;
console.log(total);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return a + b;
}

var total = sum(multiply(3, 4), 2) + 6;
console.log(total);

function multiply(num1, num2) {
    return num1 * num2;
}
function add1(a, b) {
    return multiply(a, b) + b;
}
var mul = multiply(8, 3);
var add = add1(multiply(7, 3), 5);

console.log("Multiply =", mul);
console.log("Addition =", add);

var add2 = add1(7, 5);
console.log("Addition =", add2);

var a = 7;

function sum() {
    var b = 6;
    var c = a + b;
    console.log("C =", c);
}

sum();
console.log("A =", a);
// console.log("B =", b);
// console.log("C =", c);

var a = 7;
console.log("A =", a);
function sum() {
    var b = 6;
    a = b + 5;
    console.log("A =", a);
}
sum();
console.log("A =", a);

var a = 7;
console.log("A =", a);
function sum() {
    var b = 6;
    console.log("B =", b);
    a = b + 5;
    console.log("A =", a);
}
sum();
console.log("B =", b);

function multiply(num1, num2) {
    return num1 * num2;
}

function sum(a, b) {
    return multiply(a, b);
}

// var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 6);
// console.log("Multiply =", mul); // Output: Multiply = 24
console.log("Addition =", add); // Output: Addition = 26

var add2 = sum(7, 5); // Assign the result to a different variable
console.log("Addition =", add2); // Output: Addition = 40

function multiply(num1, num2) {
    return num1 * num2;
}

function sum(a, b) {
    return a + b;
}

var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 5);

console.log("Multiply =", mul);
console.log("Addition =", add);

function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return multiply(a, b) + b;
}
var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 5);

console.log("Multiply =", mul);
console.log("Addition =", add);

var add2 = sum(7, 5);
console.log("Addition =", add2);

var a = 7;
function sum() {
    console.log("A =", a);
    var a = 6;
    console.log("A =", a);
    a = 3 + 2;
    console.log("A =", a);
}
sum();
console.log("A =", a);

function multiply(num1, num2) {
    return num1 * num2;
}

function sum(a, b) {
    return multiply(a, b) + b;
}

var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 5);

console.log("Multiply =", mul); // Output: Multiply = 24
console.log("Addition =", add); // Output: Addition = 26

var add2 = sum(7, 5);
console.log("Addition =", add2); // Output: Addition = 40

function multiply(num1, num2) {
    return num1 * num2;
}

function sum(a, b) {
    return multiply(a, b) + b;
}

var mul = multiply(8, 3);
var add = sum(multiply(7, 3), 5);

console.log("Multiply =", mul); // Output: Multiply = 24
console.log("Addition =", add); // Output: Addition = 110

var add2 = sum(7, 5); // Assign the result to a different variable
console.log("Addition =", add2); // Output: Addition = 40

a = 7;

function sum() {
    var b = 6;
    a = b + 5;
    console.log("A =", a);
}
sum();
console.log("A =", a);

a = 7;
b = 12 + 6;
console.log("B =", b);
function sum() {

    a = b + 5;
    console.log("A =", a);
    console.log("B =", b);
}
sum();
console.log("B =", b);
console.log("A =", a);
sum();
a = 7;
console.log(b)
function sum() {
    b = 7;
    a = b + 1;
}
console.log("A before Calling =", a);
// console.log("B before Calling =", b);

sum();
console.log("A after calling =", a);
console.log("B =", b);

var sum = function (a, b) { return a + b; };
var c = sum(4, 5);
console.log(c);
console.log(sum(7, 18));

console.log(sum);

var square = function (num1, num2) { return num1 * num2; };
var b = square(4, 10);
console.log(b);

var total = sum(7, 8);
console.log("Total =", total);

function sum(a, b) {
    return a + b;
}

console.log(a);

var a = "Hello World";

console.log("A before =", a);
var a = 6;

console.log("A after =", a);

console.log(a);

a = 6;
console.log(a);

var mul = multiply(3, 2);
console.log("Mul =", mul);
var add = sum(4, 6);
console.log("Add =", add);

var sum = function (a, b) { return a + b; };
function multiply(num1, num2) {
    return num1 * num2;
}

var num = 5;

function changeValue(a) {
    console.log(num);
    a = 7;
    console.log(a);
}
changeValue(num);
console.log(num);

console.log("<===============Passed by Value======================>");

var arr = [4, 6, 7, 9];
function updatedArray(val) {
    val[1] = 57;
}
console.log(arr[1]);
updatedArray(arr);
console.log(arr[1]);

console.log("<==================Passed by Refferrence===================>");

var obj = { name: "John", age: 56 };
function updateObject(val) {
    val.age = 40;
}
console.log(obj.age);
updateObject(obj);
console.log(obj.age);

// Passed by Value

var a = 67;
console.log("A after =", a);

function test(num) {
    console.log("Num before =", num);
    num = 4;
    console.log("Num after =", num);
}
test(a);
console.log("A after =", a);

// Passed by Refference

var a = [45, 5, 9, 2];

function test(val) {
    console.log("Val before =", val);
    val[2] = 12;
    console.log("Val after =", val);
}
test(a);
console.log("A after outside =", a);

var a = [45, 5, 9, 2];
function test(val) {
    console.log("Val before =", val);
    val[2] = "Khizar";
    console.log(val);
    val = [2, 1, 8, 3];
    val[2] = 88;
    console.log("Val after =", val);
}
test(a);
console.log("A after =", a);

// Recursive Funtion (Recursion)

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var factNum = factorial(Number(prompt("Please enter number!")));
console.log("Factorial =", factNum);

var num = Number(prompt("Please enter number!"));
var factorial = 1;
for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log("Factorial =", factorial);

var day = Number(prompt("Type day Number"));

switch (day) {
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to the weekend!");
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        console.log(day);
        break;
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);
}

var day = 5;

switch (day) {
    case 5:
        console.log("Today is Saturday");
    case 6:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to the Weekend!");
}

var day = 8;

switch (day) {
    case 5:
    case 6:
    case 8:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Looking forward to the Weekend!");
}

var vowelFound = prompt("Please enter character to find Vowel or not!").toUpperCase();

switch (vowelFound) {
    case "A":
        console.log("A is a Vowel");
        break;
    case "E":
        console.log("A is a Vowel");
        break;
    case "I":
        console.log("A is a Vowel");
        break;
    case "O":
        console.log("A is a Vowel");
        break;
    case "U":
        console.log("A is a Vowel");
        break;
    default:
        console.log(vowelFound, "is a not a Vowel it's a Consonant!");
        break;
}

var age = Number(prompt("Please type your age!"));
switch (true) {
    case (age >= 21 && age <= 30):
        console.log("You are Eligible!");
        break;
    default:
        console.log("You are not Eligible!");
        break;
}

var i = 0;

while (i < 10) {
    console.log("I =", i);
    i++;
}

var i = 0;
do {
    console.log("I =", i);
    i++;
}
while (i < 10);

var i = 1;

do {
    console.log("I =", i);
    i--;
}
while (i === 0);

console.log("After Loop!");

var doContinue = true;

while (doContinue) {
    console.log("Hello World");
    var input = prompt("Please enter (y) Yes to run again or press any key to stop!");
    if (input.toLowerCase() !== "y") {
        doContinue = false;
    }
}

console.log("After Loop!");

// For Loop

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

var userInput;

while (!userInput) {
    userInput = prompt("Please enter your name:");
}
console.log("Hello", userInput);
console.log(`Hello,${userInput}!`);

var userInput;

do {
    userInput = prompt("Please enter a number between 1 and 10:");
}
while (userInput < 1 || userInput > 10);
console.log("You entered", userInput + "!");

var firstName = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rang"];
var lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
var firstNameAndLastName = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
        console.log(firstName[i] + " = " + lastName[j]);
        firstNameAndLastName.push(firstName[i] + " = " + lastName[j]);
    }
}
console.log("First Name And LastName =", firstNameAndLastName);

console.log("<===================================>");

var firstName = [" 1. BlueRay", " 2. Upchuck", " 3. Lojack", " 4. Gizmo", " 5. Do-Rang"];
var lastName = ["Zzz", "Burp", "Dogbone", "Droop", "Colic"];

for (var i = 0; i < firstName.length; i++) {
    console.log(firstName[i] + " = " + lastName[i]);
}

function practice(val) {
    if (val == 10) {
        var a = 12;
        console.log(a);
    }
    console.log(a);
}
practice(10);
console.log(a);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenArray = [];

document.write(`Counting :--${arr}<br/>`);
document.write(`Reverse Counting :--${arr.reverse()}<br/>`);
document.write(`Even Counting :--${newArr}<br/>`);

for (i = 0; i = arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    }

}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenArray = [];

// document.write(`Counting: ${arr}<br/>`);
console.log(arr);
// document.write(`Reverse Counting: ${arr.reverse()}<br/>`);
console.log(arr.reverse());
console.log("Array after reverse =", arr);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    }
}

// document.write(`Even Counting: ${evenArray.reverse}<br/>`);
console.log("New Even Array", evenArray);

var string = "KhizarWakeel";
console.log(string.slice(1, 6));

var string = ["Khizar", "Wakeel", "Ali", "Usman", "Wakeel", "Ali", "Usman"];
console.log(string.splice(1, 6));

let name1 = "Khizar";
console.log(name1);

let name2 = 56;
console.log(name1);

var object = { name: "Khizar", age: 23, jobTitle: "Front-End Developer", Experience: "1 year" };
console.log(object);

var word = prompt("Please enter your word!").toUpperCase();
var check = "";
for (var i = word.length - 1; i >= 0; i--) {
    check += word[i];
}
// console.log(word, check);

if (word === check) {
    console.log(word, "is palindrome word!");
}
else {
    console.log(word, "is not palindrome word!");
}

for (var a = 1; a <= 100; a = a + 10) {
    for (var b = a; b < a + 10; b++) {
        document.write(b + "   ");
    }
    document.write("<br />");
}

var oddNumbers = [];

for (var i = 1; i <= 100; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);

alert("Hello World");

var data = { name: "Khizar", "age": 23, class: "BA" };
console.log(data);

var data = {
    name: "Khizar",
    age: 23,
    language: "urdu",
    class: "Web Development",
    myNewObject: { name: "Usman", age: 23 },
    functionExample: function () {
        console.log("Hello World");
    }
}

console.log(data.functionExample());
console.log(data);

var data = {
    name: "Khizar",
    lname: "Wakeel",
    age: 23,
    language: "urdu",
    class: "Web Development",
    myNewObject: { name: "Usman", age: 23 },
    functionExample: function () {
        console.log("Hello my first name is " + this.name + " my last name is " + this.lname);
    }
}
console.log(data.functionExample());
console.log(data);

var listOfArrays = [15, "Khizar", 14, null, true, undefined];
console.log(listOfArrays);

var val = prompt("Please enter the value");

if (val >= 20) {
    console.log("You have won the worldcup!");
}
else {
    console.log("Sorry you are not eligible");
}

console.log(this);

function Person(name) {
    this.name = name;
}

// const john = new Person("John");
console.log(this.name); // Output: "John"

const name = "Khizar";
console.log(name);
name = "Ahad";
console.log(name);

let name = "Khizar";
console.log(name);

name = "Ahad";
console.log(name);

let name = "Muneeb";
console.log(name);

console.log(confirm("Leave"));

console.log(name);
let name = "Khizar";

console.log(name);

console.log(hello);
const hello = "Muneeb";
console.log(hello);

// Higher Order Functions

// let mycolors = ['red','orange','yellow'];

mycolors.forEach(saySomethingNice)

function saySomethingNice(color) {

}

// Mutating vs Returning

Mutating

// let pets = [
//     { name: "Meowsalot", species: "Cat", age: 2 },
//     { name: "Barksalot", species: "Dog", age: 3 },
//     { name: "Purrsloud", species: "Cat", age: 8 },
//     { name: "Fishshshsh", species: "Fish", age: 4 },
//     { name: "Bhaoo", species: "Bear", age: 6 },
//     { name: "Baainn", species: "Cow", age: 4 },
//     { name: "OHHHHHHH", species: "Parrat", age: 5 }
// ]

// console.log("Returned Number =",pets.push({ name: "Puppster", species: "Dog", age: 1 }));
// console.log(pets);

console.log("Returned Number =", pets.splice(1, 2, { name: "Puppster", species: "Dog", age: 1 }));
console.log(pets);

var pets1 = [
    { name: "Meowsalot", species: "Cat", age: 2 },
    { name: "Barksalot", species: "Dog", age: 3 },
    { name: "Purrsloud", species: "Cat", age: 8 }
]

console.log("Returned Number =", pets.push({ name: "Puppster", species: "Dog", age: 1 }));
console.log("Origional Array =", pets);
var ourTest = pets1.map(nameOnly);

function nameOnly(x) {
    return x.name;
}

console.log("New Returned Array =", ourTest);
console.log("Origional Array After Mapping the Array =", pets);

// let pets = [
//     { name: "Meowsalot", species: "Cat", age: 2 },
//     { name: "Barksalot", species: "Dog", age: 1 },
//     { name: "Purrsloud", species: "Cat", age: 8 },
//     { name: "Bawwaooo", species: "Dog", age: 3 }
// ]

console.log(pets);

// let dogs = pets.filter(onlyDogs);

function onlyDogs(x) {
    return x.species === "Dog";
}

function onlyBabies(x) {
    return x.ages
}

console.log(dogs);

function updateArray(arr) {
    console.log(arr);
    arr[1] = "Mango";
    return arr;
}

let obj = "Apple";
console.log(obj);
let result = updateArray([obj, obj]);
console.log(result);

var pets1 = [
    { name: "Meowsalot", species: "Cat", age: 2 },
    { name: "Barksalot", species: "Dog", age: 3 },
    { name: "Purrsloud", species: "Cat", age: 8 }
]

console.log("Returned Number =", pets1.push({ name: "Puppster", species: "Dog", age: 1 }));
console.log("Origional Array =", pets1);
var ourTest = pets1.map(nameOnly);

function nameOnly(x) {
    return x.name;
}

console.log("New Returned Array =", ourTest);
console.log("Origional Array After Mapping the Array =", pets1);

// let pets = [
//     { name: "Meowsalot", species: "Cat", age: 2 },
//     { name: "Barksalot", species: "Dog", age: 1 },
//     { name: "Purrsloud", species: "Cat", age: 8 },
//     { name: "Bawwaooo", species: "Dog", age: 3 }
// ]

console.log(pets);

// let dogs = pets.filter(onlyDogs);

function onlyDogs(x) {
    return x.species === "Dog";
}

function onlyBabies(x) {
    return x.age < 3;
}

// let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).mapo(nameOnly);
console.log(babyDogNames);

document.addEventListener("click", function () {
    alert("Hello World");
});

let obj = [{ name: "Khizar" }, { age: 23 }, { model: "Tesla" }];

console.log(Object.keys(obj));

// let john = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 23,
//     driveCar() {
//         let imAFunctionNotAMethod = () => console.log(this);
//         imAFunctionNotAMethod();
//         console.log(this.firstName + " " + this.lastName + " is driving a car.");
//     }
// }
john.driveCar();

var num = 10;

function multiplyByTwo(num) {
    num *= 2;
}

multiplyByTwo(num);
console.log(num);

let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");
ourForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(ourField.value);
});

function createItem(x) {
    let ourHTML = `<li class="listItem">${x} <button class="btnStyling" onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}

const str = 'i have learned something new today';
const arr = str.split(" ");
console.log(arr);

const str2 = arr.join(" ");
console.log(str2);

const str3 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str3);

const person = {
    name: "Khizar Wakeel",
    age: 25,
    hobbies: ["Reading", "Coding", "Running"],
    greet: function () {
        console.log(`Hello my name is ${this.name}!`);
    }
};

person.greet();

person.name = "Zeeshan Hanif"
person.greet();

person.gender = "Male"
console.log(person.gender);

console.log(person);
person["greet"]();

var obj = {
    firstName: "Khizar",
    lastName: "Wakeel",
    age: 25,
    email: "khizarwakeel@gmail.com",
    favMovies: ["Dhoom", "Sholay", "Hum"],
    living: {
        city: "Hyderabad",
        country: "Pakistan",
    },
    salary: function () {
        return 25000;
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(obj);

console.log(obj.fullName());

document.write(obj.living.city)

var person = {};
console.log(person);

person.firstName = "Khizar";
person.lastName = "Wakeel";

console.log(person);

let person = new Object();

person.firstName = "Khizar";
person.lastName = "Wakeel";

person.age = 25;

console.log(person);
document.write(person.firstName);

let studentsList = [
    { name: "Khizar", age: 23 },
    { name: "Usman", age: 21 },
    { name: "Hassaan", age: 22 }
]

console.log(studentsList);

// console.log(studentsList[0].name);

for (let i = 0; i < studentsList.length; i++) {
    // console.log(studentsList[i]);
    console.log(`${studentsList[i].name} ${studentsList[i].age}`);
}

const name = "Khizar";
console.log(name);

name = "Usman";
console.log(name);

const arr = [10, 20, 30];
console.log(arr);

arr = 30;
console.log(arr);

const arr = [10, 20, 30];
console.log(arr);

// arr = 20;
// console.log(arr);

arr[0] = 25;
console.log(arr);

arr[1] = 100;
console.log(arr);

arr = [12, 2432, 3433];
console.log(arr);

const obj = {
    name: "Khizar",
    age: 23,
    class: "BA Part-2",
    phone: "SamSung"
}

console.log(obj);

// const obj = {hello:"Hello"};
// console.log(obj);

// obj = {'age':20}
// console.log(obj);
console.log(obj.name);

obj.name = "Ahad";
console.log(obj.name);

console.log(obj);

let name = "Khizar";
console.log(name);

name = "Abdul Ahad";
console.log(name);

var name = "Khizar";
console.log(name);
var name = "Abdul";
console.log(name)

function helloWorld() {
    var name1 = "Khizar";
    console.log(name1);
    name1 = "Owais";
    console.log(name1);
}

helloWorld();
console.log(name1);

var name1; // Declare name1 in the outer scope

function helloWorld() {
    console.log(name1)
    name1 = "Khizar"; // Assign a value to name1
    console.log(name1); // Output: Khizar
    name1 = "Owais"; // Update the value of name1
    console.log(name1); // Output: Owais
}

helloWorld();
console.log(name1); // Output: Owais

console.time("Start Here");
console.log("Hello World")
console.timeEnd("End Here");

let array = [12, "Hello", null, true, { name: "Khizar" }, function () { return "Hello World" }, undefined];

console.log(array[5]());

//console.table(array);

// console.error("Something went wrong!");

// console.warn("Warning you don't have access of it!");

console.timeEnd("End Here");

console.time("Start Here");

// Perform time-consuming operations or calculations here
for (let i = 0; i < 100000; i++) {
    console.log("Hello world")
}

console.timeEnd("End Here");

var val = confirm("Do you have a laptop?");

if (val == true) {
    console.log("You are eligible");
}
else {
    console.log("Try again");
}

document.addEventListener("click", ourAmazingFunction);

function ourAmazingFunction() {
    alert("Thanks for Clicking!");
};

function doubleMe(x) {
    return x * 2;
}
console.log(doubleMe(20));

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier
    }
}

let doubleMe = createMultiplier(5);
console.log(doubleMe(20));

let mycolors = ["Red", "Orange", "Yellow", "Green"];

mycolors.forEach(saySomethingNice);

function saySomethingNice(color) {
    console.log(`The color '${color}' is a great color`);
}

let mycolors2 = ["Red", "Orange", "Yellow", "Green"];

console.log(mycolors2.push("Blue"))

console.log(mycolors2.length);

console.log(mycolors2);

mycolors2.push("Khizar");
console.log(mycolors2);

var spl = mycolors2.splice(2, 1, "Purple");
console.log(spl);

var shifff = mycolors2.shift();
console.log(mycolors2);

// let pets = [
//     { name: "Meowsalot", species: "Cat", age: 2 },
//     { name: "Barksalot", species: "Dog", age: 4 },
//     { name: "Purrsloud", species: "Cat", age: 5 },
//     { name: "Fishshsh", species: "Fish", age: 3 },
//     { name: "Bahaoo", species: "Bear", age: 8 },
//     { name: "Baaainn", species: "Cow", age: 6 },
//     { name: "Ohhhhahah", species: "Parrot", age: 10 },
// ];

console.log("Returned =", pets.push({ name: "Puppster", species: "Dog", age: 1 }));
console.log(pets);

console.log("Returned =", pets.splice(1, 2, { name: "Puppster", species: "Dog", age: 1 }))
console.log(pets);

let str = "lorem ipsum dollar sit"
let str1 = str.lastIndexOf("a")
console.log(str1);

let text = `lorem Dollar google intelligent google jshd jshdks
jdhfsdhjmsn jhdssj jhsd ikshd ushd ujjdfh ${2 + 23 + 325 * 56} jdhsj
                                                                                          jasdh.`
console.log(text);

name = `khizar`
fatherName = `wakeel`;
console.log(`${name, fatherName}`);

let pets1 = [
    { name: "Meowsalot", species: "Cat", age: 2 },
    { name: "Barksalot", species: "Dog", age: 4 },
    { name: "Purrsloud", species: "Cat", age: 5 },
];
console.log(pets1);
console.log("Returned Value =", pets1.push({ name: "Puppster", species: "Dog", age: 1 }));
console.log("Origional Array =", pets1);

let ourTest = pets1.map(nameOnly);

function nameOnly(x) {
    return x.name;
}
console.log("New Array =", ourTest);
console.log("Origional Array After Map =", pets1);

console.log("<====================================================================================>")

let pets = [
    { name: "Meowsalot", species: "Cat", age: 2 },
    { name: "Barksalot", species: "Dog", age: 2 },
    { name: "Purrsloud", species: "Cat", age: 5 },
    { name: "Bhaaaooo", species: "Dog", age: 5 },
];

console.log(pets);

let dogs = pets.filter(onlyDogs);
console.log("Filter Dogs =", dogs);

function onlyDogs(x) {
    return x.species === "Dog";
}

let dogs1 = pets.filter(onlyBabies);
console.log("Filter Dogs Babies =", dogs1);

function onlyBabies(x) {
    return x.age < 3 && x.species === "Dog";
};

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);
console.log(babyDogNames);

let val = "Khizar";
console.log(val);

function myFunction() {
    val = "Usman";
    console.log(val);
}

myFunction();
console.log(val);

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === "  ") {
        alert("No double spaces!");
        break;
    }
}

var text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
be "the Second World War." So let's search the following sentence for the banned characters
and replace them with the phrase that the New Yorker prefers.
It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.`;

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text);
    }
}

// let john = {
//     firstName: "John",
//     lastName: "Doe",
//     driveCar() {
//         console.log(`${this.firstName} ${this.lastName} is driving a car!`);
//     }
// }
// john.driveCar();

let person = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function imAFunctionNotAMethod() { // This is Inner Function or Outer Function
            console.log(this);
        }
        imAFunctionNotAMethod()
        console.log(`${this.firstName} ${this.lastName} is driving a car!`);
    }
}
person.driveCar();

function breathe() {
    console.log(`${this.firstName} ${this.lastName} inhaled and exhaled!`)
}

breathe.call(person);

function printName(first, last) {
    console.log(`${first} ${last}`);
    console.log(this);
}

printName.call({
    model: 'Samsung Galaxy S20',
    color: 'Black',
}, 'Khizar', 'Wakeel');

console.log("<=========================================>")

function printName(first, last) {
    console.log(`${first} ${last}`);
    console.log(this);
}

const printName1 = printName.bind([2 * 2 * 2 * 2 * 2, 625, 23, 23], 'Khizar', 'Wakeel');

printName1();

document, addEventListener("click", function () {
    alert("Thanks you for clicking!");
})

document.addEventListener("click", () => alert("Thanks for clicking!"));

// let myNumbers = [10, 500, 2000];

// let doubleNumbers = myNumbers.map(
//     function (x) {
//         return x * 2
//     }
// );
console.log(doubleNumbers);

let finding = [10, 500, 2000];

let findFilter = finding.filter(
    function (x1) {
        if (x1 === 500) {
            return 500
        }
    }
);

console.log(findFilter);

let myNumbers = [10, 500, 500, 2000, 3];
let doubleNumbers = myNumbers.filter(x => x === 500).map(x => x * 2);
console.log(doubleNumbers);

let myNumber = 20

myNumber === 20 ? `${console.log('Yeah this is a number!')}` : `${console.log('not a number')}`;

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        let imAFunctionNotAMethod = () => console.log(this);
        imAFunctionNotAMethod();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

john.driveCar();

const name = "John";
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

var a = 100;
var b;
b = "Value is " + (a > 80 ? "True" : "False");
console.log(b);

let age = prompt("Please type your age!");
let message = age >= 15 ? "You are an adult" : "You are not an adult";
console.log(message);

// DOM Manipulation

const ulTag = document.body.children[0];
console.log(ulTag.nextElementSibling);

console.log(document.body.children);
console.log(document.body.children[5]);

var fullDate = new Date();
console.log(fullDate);

var fullYear = fullDate.getFullYear();
console.log(fullYear);

console.log(`copywrite ${fullYear}`);

let x = [1, 2, 3, 5];

x.forEach((e) => {
    if (e < 3 || e === 5) return;
    console.log(e);
});

let obj = {
    name: "Khizar",
    age: 23,
}

console.log(Object.keys(obj))

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}

console.log("Before Code");

setTimeout(() => {
    console.log("Hello World");
}, 2000);

console.log("After Code");

// CallBack Functions

function printGreet(msg, alertGreet) {
    alertGreet(msg)
}

function alertGreet(msg) {
    alert(msg + " from alertGreet");
}

printGreet("Hello World", alertGreet);

function printGreeting(msg, alertGreet) {
    if (msg === 'morning') {
        morning(alertGreet);
    }
    else if (msg === 'evening') {
        evening(alertGreet);
    }
    else {
        night(alertGreet);
    }
}
function alertGreet(msg) {
    alert(msg)
}
function morning(alertGreet) {
    alert('Good Morning');
    alertGreet("Hello World");
}
function evening(alertGreet) {
    alert('Good Evening');
    alertGreet("Hello World");
}
function night(alertGreet) {
    alert('Good Night');
    alertGreet("Hello World");
}

printGreeting(prompt("Please enter Day time!"), alertGreet);

// These are all CallBack Hells

function success() {
    console.log("Success!");
}
function failure() {
    console.log("Failure!");
}
function chkUserPromise(userInput) {
    userInput === true ? success() : failure();
}

chkUserPromise(false);

console.log("Before Hello World");

const anyFunction = () => {
    return ((Math.floor(Math.random() * 10)) % 2 === 0) ? true : false;
}

const resolveFunction = () => console.log("Success!");
const rejectFunction = () => console.log("Failure!");

const result = new Promise((resolve, reject) => {

    setTimeout(() => anyFunction() ? resolve() : reject(), 2000);

})

result.then(resolveFunction).catch(rejectFunction);

console.log("After Hello World");

// How we get data from API

console.log("Fetch API");

async function fetchApi() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("API", api);
    const json = await api.json();
    console.log("JSON Format", json);
}

fetchApi();

async function postApi() {
    const postedApi = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            Student: "CNC Batch 10",
            Name: "Khizar",
            City: "Karachi",
            studentId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    console.log(postedApi, "Api");
    const json = await postedApi.json();
    console.log("JSON Format", json);
}

postApi();

async function test() {
    return "Hello World";
}

test().then(result => {
    console.log(result);
});

async function fetchApi() {
    try {
        const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("API", api);
        const json = await api.json();
        return json;
    } catch (error) {
        console.log("Sorry Brooooo", error);
    }
}

fetchApi().then((res) => {
    console.log("JSON Response", res);
});

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

console.log("Hello World");

// Convert Miles into KiloMeters

// let kilometerInAMile = 1.60934;

// let miles = prompt("Please Value in Miles");

let kilometersToMiles = kilometerInAMile / miles;

console.log(kilometersToMiles);

// Convert Miles into KiloMeters

let kilometerInAMile = 1.60934;

let miles = prompt("Please enter a value in miles!");

if (!isNaN(miles)) {
    let kilometers = kilometerInAMile * miles;
    console.log(kilometers);
} else {
    console.log("Invalid input. Please enter a valid number of miles.");
}

// Convert Kilometers into Miles

let MileInAKilometer = 0.621371;

let kilometers = prompt("Please enter a value in kilometers!");

if (!isNaN(kilometers)) {
    let miles = MileInAKilometer * kilometers;
    console.log(miles);
} else {
    console.log("Invalid input. Please enter a valid number of miles.");
}

var word = prompt("Enter your word!");

var check = "";

for (var i = word.length - 1; i >= 0; i--) {
    check += word[i];
    //   console.log(word, check);
}

if (word === check) {
    alert(`"${word}" is a Palindrome word!`);
} else {
    alert(word + " is not a Palindrome word!");
}

document.write("Table <br />");
for (var a = 1; a <= 100; a += 10) {
    for (var b = a; b < a + 10; b++) {
        document.write(b + " ");
    }
    document.write("<br />");
}

for (var a = 1; a <= 100; a = a + 10) {
    for (var b = a; b < a + 10; b++) {
        document.write(b + " "); // Add a space after each number
    }
    document.write("<br />");
}

function clickBtn() {
    alert("Hello World!");
}

function getName() {
    let data = document.getElementById("inputData");
    let finalData = data.value;
    console.log(finalData);
    data.value = "Khizar";
    data.focus();
}

getName()

function setText() {
    let paragraph = document.getElementById("para");
    paragraph.innerHTML = "Hello my name is Khizar Wakeel and I am learning JavaScript!"
}

setText()

let isValue = true;

if (isValue) {
    let studentName = "Khizar";
}

console.log(studentName);

// const studentName = "Khizar";
// studentName = "Ahad";

console.log(studentName);

const obj = {
    name: "Khizar",
    age: 24,
    class: "Web3"
}

console.log(obj.name);
console.log(obj["name"]);

alert("Welcome to JS land... \n Happy codding!")

let studentName = "John Doe";
alert(studentName);

let studentAge = 15;
alert(studentAge + " years old");

let course = "Certified Mobile Application Development";
alert(course)

let emailAdd = "khizarwakeel@gmail.com";
alert("My Email Address is " + emailAdd);

document.write("<h1>Yah! I can write HTML content through JavaScript</h1>")

let age;
age = 24;
alert("I am " + age + " year old!");

let birthYear;
birthYear = 1999;

document.write("My birth year is ", birthYear, "<br />");
document.write("Data type of my declared variable is number");

let jsd = "Khi"
alert(jsd)

let num1 = 3;
let num2 = 5;
let add = 3 + 5;
document.write("Sum of " + num1 + " and " + num2 + " is " + add);

let num1 = 3;
let num2 = 5;
let sub = 3 - 5;
document.write("Sub of " + num1 + " and " + num2 + " is " + sub);

let num1 = 3;
let num2 = 5;
let mod = 3 * 5;
document.write("Mul of " + num1 + " and " + num2 + " is " + mod);

let num1 = 3;
let num2 = 5;
let mul = 3 % 5;
document.write("Modu of " + num1 + " and " + num2 + " is " + mul);

let num1 = 3;
let num2 = 5;
let div = 3 / 5;
document.write("Div of " + num1 + " and " + num2 + " is " + div);

let value;
document.write("Value after variable declaration is: ", value)

value = 5;
value++

document.write("<br /> Value is " + value)

value += 7;   // or value = value + 7
document.write("<br /> Value is " + value)

value--

document.write("<br /> Value is " + value)

value %= 3

document.write("<br /> Re Value is " + value)

// Temprature Converter

// const fahrenheitTemperature = 70;

// const celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
console.log(`${fahrenheitTemperature}°F is ${celsiusTemperature}°C`);

const celsiusTemperature = 25;

const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
// document.write(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
let getValue = `${celsiusTemperature}°C is ${fahrenheitTemperature}°F`

let editedValue1 = getValue.slice(0, 2);
let editedValue2 = getValue.slice(3, 11);
let editedValue3 = getValue.slice(12, 14);

let updatedValue = editedValue1 + editedValue2 + editedValue3;
document.write(updatedValue);

// let celsiusTem = 25;

// let FahrenheitTem = (celsiusTem * 9) / 5 + 32;

// let celsiusVsFahrenheit = celsiusTem + " C is " + FahrenheitTem + " F";

console.log("Result is", celsiusVsFahrenheit);

let FahrenheitTem = 77;

let celsiusTem = (FahrenheitTem - 32) * 5 / 9;

let celsiusVsFahrenheit = FahrenheitTem + " F is " + celsiusTem + " C";

console.log("Result is", celsiusVsFahrenheit);

let totalCurrency = 10 * 155 + 25 * 41;
console.log("Total Currency in PKR: " + totalCurrency)

let currentUsDollarInPkr = 155;
let currentSauRiyal = 41;

let userCurrency = prompt(
    "Please enter which country currency are you converting to Pakistani Rupee! Saudia or USA"
);

if (userCurrency === "usa") {
    let userAmount = Number(prompt("Please enter number of Amount of US Dollar"));
    let totalUsInPkr = userAmount * currentUsDollarInPkr;
    document.write(userAmount + "$" + " is equal to " + totalUsInPkr + "Rs");
} else if (userCurrency === "saudia") {
    let userAmount = Number(
        prompt("Please enter number of Amount of Saudian Riyal")
    );
    let totalSauInPkr = userAmount * currentSauRiyal;
    document.write(userAmount + "R" + " is equal to " + totalSauInPkr + "Rs");
} else {
    document.write("Please enter correct Currency!");
}

const usdToPkrRate = 155;
const sarToPkrRate = 41;

const usdAmount = 10;
const sarAmount = 25;

const totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

console.log("Total amount in Pakistani Rupees:", totalPkr);

let a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log("a is " + a);  // 1
console.log("b is " + b);  // 0 , 1 ,  // 0
console.log("result is " + result); // 1 - 0 + 1 + 1 // 3

do {
    let userInput = prompt("Please enter your city!");

    if (userInput === "karachi") {
        console.log('"Welcome to city of lights"');
    } else if (userInput === "hyderabad") {
        console.log('"Welcome to city of Birds"');
    } else if (userInput === null || " ") {
        console.log("You did not provide any city!");
        break;
    } else {
        console.log(userInput + " is a beautiful city!");
    }
    var doContinue = prompt("Do you want to continue! Press y");
} while (doContinue === "y");

let doContinue = "y";

while (doContinue === "y") {
    let userInput = prompt("Please enter your city!");
    console.log(userInput);

    if (userInput.trim() === "karachi") {
        console.log('"Welcome to the city of lights"');
    } else if (userInput.trim() === "hyderabad") {
        console.log('"Welcome to the city of Birds"');
    } else if (userInput === null || userInput.trim() === "") {
        console.log("You did not provide any city!");
        break
    } else {
        console.log(userInput.trim() + " is a beautiful city!");
    }

    doContinue = prompt("Do you want to continue? Press y");
}

let doContinue = "y";
let redColorMessage = "Must Stop!";
let yellowColorMessage = "Ready to Move!";
let greenColorMessage = "Move now!";

while (doContinue === "y") {
    let userInput = prompt("Enter color of traffic signals!");
    if (userInput === "red") {
        alert(userInput + " color means you " + redColorMessage);
    } else if (userInput === "yellow") {
        alert(userInput + " color means you " + yellowColorMessage);
    } else if (userInput === "green") {
        alert(userInput + " color means you " + greenColorMessage);
    } else if (userInput === "" || userInput === null) {
        alert("You did not provide any color!");
        break;
    } else {
        alert("This is not the color of Trafic Signals!");
        break;
    }
    doContinue = prompt("Do you want to continue? Press y");
    if (doContinue === null || doContinue === "") {
        console.log("Thank you! see you again...");
    }
}

let age = 25;
console.log("Before Age = " + age);

function ageChanged() {
    age += 1;
    console.log("In Function Age = " + age);
}

console.log("After Function Age = " + age);

var a = 4;

if (++a === 5) {
    alert("Given condition for variable a is true");
}

var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}
else {
    alert("This is not True!");
}

var c = 12;

if (c++ === 13) {
    alert("Condition 1 is true!");
}
if (c === 13) {
    alert("Condition 2 is True!");
}
if (++c < 14) {
    alert("Condition 3 is True!");
}
if (c === 14) {
    alert("Condition 4 is True!");
}

var materialCost = 20000;
var labourCost = 2000;

var totalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) {
    alert("The cost Equals!");
}
if (true) {
    alert("True");
}
if (false) {
    alert("flase");
}

if ("Car" > "Cat") {
    alert("Car is smaller than Cat!");
}

var stdName = prompt("Enter your Name!");
var comSci = Number(prompt("Enter your English Marks!"));
var math = Number(prompt("Enter your Computer Science Marks!"));
var physics = Number(prompt("Enter your Physics Marks!"));
var totalMarks = 300;
var obtainedMarks = comSci + math + physics;

var percentage = (obtainedMarks / totalMarks) * 100;
var roundedPer = Math.round(percentage);

if (roundedPer >= 80) {
    var grade = "A-one";
    var remarks = "Excellent";
    var reward = "200$";
} else if (roundedPer >= 70) {
    var grade = "A";
    var remarks = "Good";
} else if (roundedPer >= 60) {
    var grade = "B";
    var remarks = "You need to improve";
} else {
    var grade = "Fail!";
    var remarks = "Sorry";
}

console.log("Marks Sheet");
console.log("Name :", stdName);
console.log("Total marks :", totalMarks);
console.log("Obtained marks :", obtainedMarks);
console.log("Percentage :", roundedPer + "%");
console.log("Grade :", grade);
console.log("Remarks :", remarks);
if (percentage >= 80) {
    console.log("Reward :", reward);
}

var stdName = prompt("Enter your Name!");
var comSci = Number(prompt("Enter your English Marks!"));
var math = Number(prompt("Enter your Computer Science Marks!"));
var physics = Number(prompt("Enter your Physics Marks!"));
var totalMarks = 300;
var obtainedMarks = comSci + math + physics;

var percentage = (obtainedMarks / totalMarks) * 100;
var roundedPer = Math.round(percentage);

var grade, remarks, reward;

if (roundedPer >= 80) {
    grade = "A-one";
    remarks = "Excellent";
    reward = "200$";
} else if (roundedPer >= 70) {
    grade = "A";
    remarks = "Good";
} else if (roundedPer >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail!";
    remarks = "Sorry";
}

document.getElementById("stdName").textContent = stdName;
document.getElementById("totalMarks").textContent = totalMarks;
document.getElementById("obtainedMarks").textContent = obtainedMarks;
document.getElementById("percentage").textContent = roundedPer + "%";
document.getElementById("grade").textContent = grade;
document.getElementById("remarks").textContent = remarks;

if (percentage >= 80) {
    document.getElementById("reward").textContent = reward;
}
else {
    document.getElementById("reward").textContent = 0;
}

var secretNumber = 7;
var user = Number(prompt("Guess the Secret Number!"));

if (secretNumber === user) {
    console.log("Bingo! Correct Answer");
}
else {
    console.log("Try Again!");
}

if (user === secretNumber + 1) {
    console.log("Close enough to the correct answer.")
}

const secretNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(
    prompt("Guess the secret number (between 1 and 10):")
);

if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    console.log("Close enough to the correct answer.");
} else {
    console.log(`Sorry, the secret number was ${secretNumber}. Try again!`);
}

var userInput = Number(prompt("Please enter the Number!"));

if (userInput % 2 === 0) {
    console.log(userInput + " is a Even Number!");
} else {
    console.log(userInput + " is a Odd Number!");
}

var firstNum = Number(prompt("Please enter your first number!"));
var operator = prompt("Please enter the operator!");
var secondNum = Number(prompt("Please enter your second number!"));

if (operator === "+") {
    var result = firstNum + secondNum;
    console.log(
        "Result = " + firstNum + " " + operator + " " + secondNum + " = " + result
    );
} else if (operator === "-") {
    var result = firstNum - secondNum;
    console.log(
        "Result = " + firstNum + " " + operator + " " + secondNum + " = " + result
    );
} else if (operator === "*") {
    var result = firstNum * secondNum;
    console.log(
        "Result = " + firstNum + " " + operator + " " + secondNum + " = " + result
    );
} else if (operator === "/") {
    var result = firstNum / secondNum;
    console.log(
        "Result = " + firstNum + " " + operator + " " + secondNum + " = " + result
    );
} else if (operator === "%") {
    var result = firstNum % secondNum;
    console.log(
        "Result = " + firstNum + " " + operator + " " + secondNum + " = " + result
    );
} else {
    console.log("Please enter the correct number!");
}

var userInput = Number(prompt("Please enter the number to check!"));

if (userInput > 0) {
    console.log(userInput + " is a Positive Number!");
} else if (userInput < 0) {
    console.log(userInput + " is a Negative Number!");
} else if (userInput === 0) {
    console.log("You enter the " + userInput + " number!");
} else {
    console.log("Only numbers allow!");
}

var userInput = prompt("Please enter alphabet!");

if (
    userInput.toLowerCase() === "a" ||
    userInput.toLowerCase() === "e" ||
    userInput.toLowerCase() === "i" ||
    userInput.toLowerCase() === "o" ||
    userInput.toLowerCase() === "u"
) {
    console.log("Wow! " + userInput + " is a vowel!");
} else {
    console.log("Sorry! " + userInput + " is a consonant!");
}

var correctPass = "admin123";

var userPass = prompt("Enter the password!");

if (userPass === "") {
    var againPass = prompt("Please enter the password!");
    if (correctPass === againPass) {
        console.log("Correct.. successfully login!");
    }
} else if (correctPass === userPass) {
    console.log(
        "Correct! The password you entered matches the original password."
    );
} else {
    console.log("Incorrect password!");
}

var time = Number(prompt("Please enter your time"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time < 2359) {
    console.log("Good Night!");
} else {
    console.log("Please enter correct Time!");
}

function convertTo12HourFormat(time24) {
    // Extract the hours and minutes from the input time string
    const [hours, minutes] = time24.split(':').map(Number);
    console.log(hours, "Hours")
    console.log(minutes, "Minutes")

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return "Invalid time format";
    }

    // Determine whether it's AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    const hours12 = hours % 12 || 12; // Handle midnight (0) and noon (12)
    console.log(hours12, "hours");

    // Format the time in 12-hour format
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;

    return time12;
}

// Example usage
const time24Hour = "15:00"; // Example input in 24-hour format
const time12Hour = convertTo12HourFormat(time24Hour);
console.log(`Converted time: ${time12Hour}`);

var availEdu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
var startingNum = 1;

for (i = 0; i < availEdu.length; i++) {
    var num = startingNum + i;
    console.log(num + ") " + availEdu[i]);
}

var newArray = availEdu.map((i) => i);
console.log(newArray);

availEdu.map((ele, ind, array) => console.log(`${ind + 1}) ${ele}`));

availEdu.map((ele, ind, array) => console.log(`${ind + 1}) ${ele} ${array[0]}`));

var stdNames = ["Khizar", "Ahad", "Wakeel"];

var stdScore = [320, 230, 480];

var totalMarks = 500;

var khizarPer = (320 / 500) * 100 + "%";
var ahadPer = (230 / 500) * 100 + "%";
var wakeelPer = (480 / 500) * 100 + "%";

console.log(
    "Score of " + stdNames[0] + " is " + stdScore[0] + ". Percentage: " + khizarPer
);
console.log(
    "Score of " + stdNames[1] + " is " + stdScore[1] + ". Percentage: " + ahadPer);
console.log(
    "Score of " + stdNames[2] + " is " + stdScore[2] + ". Percentage: " + wakeelPer
);

const studentNames = ["Khizar", "Ahad", "Wakeel"];

const studentScores = [320, 230, 480];

function calculatePercentage(score) {
    return (score / 500) * 100;
}

for (let i = 0; i < studentNames.length; i++) {
    const name = studentNames[i];
    const score = studentScores[i];
    const percentage = calculatePercentage(score);

    console.log(`${name}'s score: ${score}`);
    console.log(`${name}'s percentage: ${percentage}%`);
    console.log("-------------------");
}

var colorNames = ["red", "green", "blue"];

console.log("Before Array");
console.log(colorNames);

console.log(colorNames[0]);
console.log(colorNames[1]);
console.log(colorNames[2]);

console.log("After Array");
var userInput = prompt("Enter the Color Name");

colorNames.unshift(userInput);

console.log(colorNames);

console.log("After Array");
var userInput = prompt("Enter the Color Name");

colorNames.push(userInput);

console.log(colorNames);

console.log("After Array");

colorNames.unshift("pink", 'yellow');

console.log(colorNames);

console.log("After Array");

colorNames.pop();

console.log(colorNames);

console.log("After Array");

colorNames.shift();

console.log(colorNames);

console.log("After Array");

var newArray = colorNames.splice(8, 0, "green")
console.log(newArray);
console.log("Array Length", colorNames.length);

const colorNamed = ["red", "blue", "yellow"];

// Add "green" at index 8
colorNamed.splice(8, 0, "green");

console.log(colorNamed);

var userIndex = Number(prompt("Which index/Position you want to add or delete Color!"));
var userDelInd = Number(prompt("How many indexes you want to delete"));
const userColorsList = [];

let continueEntering = true;

while (continueEntering) {
    const userColors = prompt("Add Colors (or type 'stop' to end or cancel):");

    if (userColors.toLowerCase() === "stop") {
        continueEntering = false;
    } else {
        userColorsList.push(userColors);
    }
}

console.log("User inputs Colors:", userColorsList);

colorNames.splice(userIndex, userDelInd, ...userColorsList);

console.log("Origional Array", colorNames);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var slectedCites = cities.slice(2, 4);
console.log(slectedCites)

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];

// Copy the selected cities from the 'cities' array to the 'selectedCities' array
selectedCities.push(cities[2]); // Islamabad
selectedCities.push(cities[3]); // Quetta

console.log("Selected cities list:", selectedCities.join(" "));

const cities1 = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami"];

const selectedCities1 = [];

for (let i = 0; i < 3; i++) {
    if (i < cities1.length) {
        selectedCities1.push(cities1[i]);
    }
}
console.log("Selected Cities:", selectedCities1);

console.log("-------------------------------------------");

const cities = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami"];

const selectedCities = cities.slice(0, 2).concat(cities.slice(4, 5));

console.log("Selected Cities:", selectedCities);

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var uniqueArr = [];

for (var i = 0; i < arr1.length; i++) {
    if (uniqueArr.indexOf(arr1[i]) === -1) {
        uniqueArr.push(arr1[i]);
        console.log("In Loop", uniqueArr)
    }
    //   console.log("Outside If",uniqueArr)
}

console.log("Unique Elements", uniqueArr);

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var uniqueArr = removeDuplicates(arr1);

console.log(uniqueArr);

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (i = 0; i < aCities.length; i++) {
    if (i == 0) {
        console.log(i + 1 + o[1] + " choice is " + aCities[0]);
    }
    if (i == 1) {
        console.log(i + 1 + o[2] + " choice is " + aCities[1]);
    }
    if (i == 2) {
        console.log(i + 1 + o[3] + " choice is " + aCities[2]);
    }
    if (i == 3) {
        console.log(i + 1 + o[0] + " choice is " + aCities[3]);
    }
}

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd", "th"];

for (i = 0; i < aCities.length; i++) {
    var ordinal = (i + 1) + (i < 3 ? o[i] : o[3]);
    console.log(ordinal + " choice is " + aCities[i]);
}

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd", "th"];

for (i = 0; i < aCities.length; i++) {
    var ordinal;
    if (i === 0) {
        ordinal = (i + 1) + o[0];
    } else if (i === 1) {
        ordinal = (i + 1) + o[1];
    } else if (i === 2) {
        ordinal = (i + 1) + o[2];
    } else {
        ordinal = (i + 1) + o[3];
    }
    console.log(ordinal + " choice is " + aCities[i]);
}

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (var i = 0; i < aCities.length; i++) {
    console.log((i + 1) + o[i] + " choice is " + aCities[i]);
}

var a = [10, 20, 4, 40, 60, 70]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var newArray = [];

var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Merge the arrays without duplicates
var result = [];

// Add elements from the first array to the result array
for (var i = 0; i < a.length; i++) {
    if (result.indexOf(a[i]) === -1) {
        result.push(a[i]);
    }
}

// Add elements from the second array to the result array
for (var j = 0; j < b.length; j++) {
    if (result.indexOf(b[j]) === -1) {
        result.push(b[j]);
    }
}

console.log(result);

// Sort the result in ascending order
result.sort(function (a, b) {
    return a - b;
});

console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 40, 60, 70]

console.log("Hello1");
setTimeout(() => {
    console.log("HEllo2");
}, 0);
console.log("Hello3");

let Value = document.getElementsByClassName("ourClass");
console.log(Value);

let x = {
    value: 1,
    toString: function () {
        return this.value++;
    },
};

if (x == 1 && x == 2 && x == 3) {
    console.log("Wow you did it!");
}

let p = document.createElement("p");
p.textContent = "Lorem Ipsum";

let toAddDom = document.querySelector(".domPractice");
toAddDom.appendChild(p);

let inputTime = prompt(
    "Enter time in 24-hour clock format"
);
let hour = parseInt(inputTime.substring(0, 2));
let minute = inputTime.substring(2);

if (hour >= 0 && hour < 12) {
    if (hour === 0) {
        console.log(`12:${minute} AM`);
    } else {
        console.log(`${hour}:${minute} AM`);
    }
} else {
    if (hour === 12) {
        console.log(`12:${minute} PM`);
    } else {
        console.log(`${hour - 12}:${minute} PM`);
    }
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    document.write("<br />");
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("<br />");
}

for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.write(j + " ");
    }
    document.write("<br />");
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.write(j + " ");
    }
    document.write("<br />");
}

let word = prompt("Enter your word");
let check = "";

for (let i = word.length - 1; i >= 0; i--) {
    check += word[i];
    console.log(word[i]);
}
console.log(word, check);

if (word === check) {
    console.log(word, "is Palindrome word");
}
else {
    console.log(word, "is not a Palindrome word");
}

// Finding missing numnber

var arr = [50, 51, 52, 53, 54, 55, 57, 58, 62];
var missingNum;


for (var i = 0; i < arr.length; i++) {
    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            console.log(arr[i] + j);
            missingNum = diff;
        }
    }
}


console.log("Total missing number is", missingNum);


// Dictionary Order

let result = '114' > '100000';
console.log("Result =", result);

let result = 'cat' > 'dog';
console.log("Result =", result);



const submit = () => {
    const input = document.getElementById('input-text');
    console.log(input.value);
}


const myFunction = () => {
    console.log(this);
}

myFunction();


var obj = {
    name: "Smit",
    getName: () => {
        console.log(this, "Arrow");
    }
}

var a = obj.getName;
a()

var obj = {
    name: "Smit",
    getName: function () {
        console.log(this);
    }
}

var a = obj.getName;
a()

const ClickedFun = () => {
    console.log(this);
}



var company = prompt("Enter your company");
var model = prompt("Enter your model");

var cars = {
    honda: {
        civic: {
            name: "Honda Civic",
            model: "2024",
            colors: ["Black", "White", "Green"]
        }
    }
}

var filteredModel = cars[company][model];
console.log(filteredModel.name);
console.log(filteredModel.model);
console.log(filteredModel.colors[2]);

var person = {
    name: "Alice",
    age: 25
};

Object.prototype.greet = function () {
    console.log("Hello!");
};

for (var key in person) {
    console.log(key); // Output: name, age, greet
}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Hex Generator

const randomColorUtility = (length) => {
    let randomColor = Math.floor(Math.random() * length);
    console.log(randomColor);

    return randomColor;
};

const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
        console.log(hexColor);

    }
    console.log(hexColor);
};

const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(`rgb(${r},${g},${b})`);
};

// boolean multiply boolean

const valCalculate = (val) => {
    console.log(val * val);
}

valCalculate(true)