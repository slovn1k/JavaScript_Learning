/*
* Printing values, Variables and Types of them
* */

/*
//This code will output a string in the browser console
console.log('Hello world from the script file');

//here we are declaring a javascript variable
var name = 'John';
console.log(name);

//It is better to capitalize the second word in the variable(camel casing)
var lastName = 'Smith';
console.log(lastName);

//number variable by default are of float type
var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

//This is undefined variable because it has no value
var something;
console.log(something);

//Here we are printing two variable by concatenation, concatenation in JavaScript is made by using + sign
var name = 'John';
var age = 25;
console.log(name + age);
//If we print two variable of number type it will sum the values of the variables
console.log(age + age);

var job, isMarried;

//Here we are assigning a value to the declared variable
job = 'Developer';
isMarried = false;

//Here we are printing the values of the declared variables by concatenating them with strings
console.log('This is ' + name + ', he is ' + age + ' years old, he is a ' + job + ' and he is married = ' + isMarried);

//Here we are reassigning the value of the variable job, now the value is other
job = 'Software Tester';
console.log('This is ' + name + ', he is ' + age + ' years old, he is a ' + job + ' and he is married = ' + isMarried);

//Here we are using prompt window to store the user data in a variable
var writeSomething = prompt('Write some text in here!!!');
console.log(writeSomething);

var writeSomethingNew = prompt('Write something new');
//Here we are printing the user data in a alert window
alert(writeSomethingNew);
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* Operators
* */

/*
//Here we are using simple mathematics operations
var now = 2018
var age = 2016 - 26;
var secondAge = 2016 - 26 * 2;
//We can use variable to make mathematics operations
var currentAge = now - 26;

var someAge = 30;
var ageJohn, ageSmith;

//Here we are incrementing the variable by one
someAge++;
//Here we are assigning the values of variables to them self
ageJohn=ageSmith=someAge;
console.log(age);
console.log(secondAge);
console.log(currentAge);
console.log(ageJohn);
console.log(ageSmith);
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* If, else and switch statement
* */

/*
//here we are using let keyword to declare variables, it's more precise to make that in javascript
//!!!Important, it is better to declare variables using let keyword for browser to work faster
let name = 'John', age = 26, isMarried = 'no';

//This is if else statement
if(isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon');
}

isMarried = false;

//If statement using boolean values
if(isMarried){
    console.log('Yes');
} else {
    console.log('No');
}

//if statement without else
if(isMarried){
    console.log('Yes');
}

if(age < 30){
    console.log('John has plenty of time');
} else {
    console.log('John must be serious');
}

//Here we have a more complex if else statement
//Here we are checking if the value of variable is not true
if(!isMarried){
    console.log(name + ' is married and that is very good');
//here we are checking is one of two conditions is true
} else if(!isMarried || isMarried) {
    console.log(name + ' has to do something to be a better person');
//here we are checking if both conditions are true
} else if(isMarried && age === 26){
    console.log(name + ' is a perfect person');
}

let job = prompt('Enter please the job of John!!!');
//Here we are using a switch statement which is similar to the if else but uses a different structure with possibility
//of giving a default value is case the other cases are not true
switch (job) {
    case 'Teacher': console.log('John teaches kids');
    //here we use break keyword to stop the compilation of the script if the statement is true
        break;
    case 'Driver': console.log('John driver a cab');
        break;
    case 'Cop': console.log('John helps fight crime');
        break;
    //here we are executing the default action in case the other cases are not true
    default: console.log('John is not working!!! :)');
}
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* Coding challenge 1
* */

let name1 = 'John', name2 = 'Smith', name3 = 'Alex';
let johnAge = 50, johnHeight = 150, smithAge = 30, smithHeight = 100, alexAge = 200, alexHeight = 300;
let johnCalc = (johnAge * 5) + johnHeight, smithCalc = (smithAge * 5) + smithHeight, alexCalc = (alexAge * 5) + alexHeight;

if(johnCalc > smithCalc && johnCalc > alexCalc) {
    console.log(name1 + ' has won with the score of ' + johnCalc);
} else if(johnCalc === smithCalc && johnCalc === alexCalc) {
    console.log('There is no winner in this game');
} else if(smithCalc > johnCalc && smithCalc > alexCalc) {
    console.log(name2 + ' has won with the score of ' + smithCalc);
} else {
    console.log(name3 + ' has won with the score of ' + alexCalc);
}
