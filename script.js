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

/*
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
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* Functions, statements and expressions
* */

/*
//here we are declaring a function with a parameter in parentheses
function calculateAge(yearOfBirth) {
    const age = 2018 - yearOfBirth;
    //here we are returning the value of the execution of the function
    return age;
}

//here we are calling the function
// let alexAge = calculateAge(1992);
// let ageMike = calculateAge(1969);
// console.log(alexAge);
// console.log(ageMike);

//here we have a function with two parameters
function yearsUntilRetirement(name, yearOfBirth) {
    //here we are calling the precedent function to make some calculations
    //we can call functions inside a function
    const age = calculateAge(yearOfBirth);
    const retirement = 65 - age;
    if(retirement < 1){
        console.log(name + ' already retired.');
    } else {
        console.log(name + ' retires in ' + retirement + ' years.');
    }
}

//here we are calling the function with two parameters for execution
yearsUntilRetirement('Alex', 1992);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Marry', 1948);
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* Arrays
* */

/*
//here are two variants of declaring arrays
let names = ['Alex', 'Mike', 'John'];
let years = new Array(1990, 1969, 1948);

//here we are printing the first element of the array
console.log(names[0]);
//here we are assigning a value to the second element of the array
names[1] = 'Arnold';
console.log(names);

//here we have an array with different values
let john = ['John', 'Smith', 1990, 'Developer', false];

//here we are adding an element to the end of array
john.push('red');
//here are adding en element at the beginning of the array
john.unshift('Mister');
//here we are removing the last element of the array
john.pop();
//here we are removing the first element of the array
john.shift();
//here we are returning the position of the element in array
alert(john.indexOf('Smith'));

//if there is no element in the array, indexOf return -1 value
if(john.indexOf('Teacher') === -1) {
    console.log('John is not a teacher');
}

console.log(john);
*/

//----------------------------------------------------------------------------------------------------------------------
/*
* Objects, Properties and Methods
* */

/*
//here we are declaring an object with properties
let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Developer',
    isMarried: false
};

//here we are printing lastName property of the john object
console.log(john.lastName);

//here we have declared a variable with a string name of the property of the object
let xzy = 'job';
//here we are printing the property using the variable declared upper
console.log(john[xzy]);

//here we are assigning new values to the properties of the object
john.lastName = 'Miller';
john['job'] = 'Codder';

console.log(john);


//here is another method of declaring an object
let jane = new Object();
//here we are assigning properties to the new object
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBieth'] = 1969;
jane['job'] = 'Retired';
jane['isMarried'] = true;

console.log(jane);
*/

/*
//here we have a more complex object with array and function as parameters
let john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'Developer',
  isMarried: true,
  //here we have an array as a parameter for the object
  family: ['Jane', 'Mark', 'Bob'],
  //here we have a function as a parameter of the object
  calculateAge: function() {
    //here we are using the value of the object by using this keyword
    //also we are assigning a new property for the object
    this.age =  2018 - this.yearOfBirth;
  }
};

//here we are calling the function from the object
//!!!Important, this is called method
john.calculateAge();
console.log(john);
*/