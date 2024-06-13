const btn = document.getElementById('btn');
btn.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let username = 'bgailz';
let age = 24;
let present = false;

// Objects
const person = {
  username: 'bgailz',
  age: 24,
  present: false,
  child: {
    name: 'baby girl',
    friend: {
      name: 'Ansah',
    }
  }
}

console.log(person.username)
person, age = 80;
console.log(person);


// Arrays
const bottle1 = {
  size: 'large',
  color: ' yellow'
}

const bottle2 = {
  size: 'small',
  color: 'blue'
}



const bottles = [bottle1, bottle2,];

bottles.push(bottle1);
bottles.push(bottle2);
bottles;
bottles[0].color;

const date = new Date();
date.toString();
date.getDay();

// if/else
//   const age = 18;
if (age >= 18) {
  'you are true';
} else {
  'you are false';
}

// for loop
for (let i = 0; i <= 5; i++) {
  console.log('we did it!', i);
}

// functions
// Defining a function
function login(username, password) {
  // validate username and password
  if (!username || !password) {
    return 'username or password not provided';
  }
  // verify username and password
  if (username == 'blessing' && password == '1234') {
    return 'user is logged in';
  } else {
    return 'invalid username or password';
  }
}
// Invoking a function
login('blessing', '1234');

// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
45 / 7;
43 - 2;
45 / 24;
45 % 24;


// Strings in Javascript
// Concatenation
const firstname = 'Abigail';
const lastname = 'Asante';
const middlename = 'Afriyie'
firstname + ' ' + middlename + ' ' + lastname;
// Template literal
`${firstname} ${middlename} ${lastname}`;

// String Methods

let fullname = 'Abigail Asante';

fullname.length
fullname.toUpperCase()
fullname.toLowerCase()
fullname.charAt(3)
fullname.slice(0, 5)
fullname.split("")
fullname.replace("Asante", "Afriyie")
fullname.indexOf("Abigail")

// String convertion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS$(amount)`)
amount.toString()


// Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email === undefined || email === null) {
    return 'email not provided';
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided'
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('asantea331@gmail.com');
addParticipant('asantea331gmail.com')
addParticipant();
addParticipant('asantea331@gmail.com')
participants;



// Arrays in Javascript
// const users = [
{
  username: 'bgailz',
    password: '1234',
      email: 'asantea331@gmail.com'
},
{
  username: 'bgailz',
    password: '1234',
      email: 'asantea331@gmail.com'
},
];
users;




// write a function that will take a user with firstname, lastname and return fullname
function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
  firstname: 'Abigail',
  lastname: 'Asante',
}
fullName(user);


// Array map
const users = [
  { fistname: 'Abigail', lastname: 'Asante' },
  { fistname: 'Ama', lastname: 'Asantewaa' },
  { fistname: 'Akosua', lastname: 'Dufie' },
  { fistname: 'Abigail', lastname: 'Asante' },
  { fistname: 'Abigail', lastname: 'Asante' },
]
// users.map(fullName);

// Square of numbers
function square(number) {
  return number ** 2;
}

square(6);
const numbers = [1, 2, 3, 4];
numbers.map(square);

// Array filter
function isEven(number) {
  return number % 2 === 0;
}
isEven(3)
numbers.filter(isEven)



// write a function that will allow a user to reset their password
const user = {
  email: 'asantea331@gmail.com',
  password: '4321'
}

function resetPassword(email, password) {
  // check if email and new password was provided
  if (!email || !newPassword) {
    return "Email or password not provided";
  }
  // check if provided email is correct
  if (email === user.email){
    // update password with new one
    user.password = newPassword;
    return "Password reset sucessful";
  }
  if (email !== user.email){
    return "Invalid email";
  }
  // newPassword(1234);
}
user;
// resetPassword('asantea331@gmail.com', '123')

resetPassword('asantea331@gmail.com', '1234');
user;



// You have been given an array of students with some of them marked as absent and others marked as present.
// Write a function that returns the total number of students present.
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
]
function studentsPresent(student) {
  // Define a variable to track the total present
  let total = 0;
  // Begin a loop
  for (let i = 0; i < students.length; i++) {
    // For any iteration if student is present then increase total present by 1;
    if(student[i].present === true) {
      total++
    }
    
  }
  // Retun total
  return total;
}








// Classes in Javascript
class Laptop {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new Laptop('Dell', 'black');
const laptop2 = new Laptop('HP', 'silver');
laptop1.brand
laptop2.brand
laptop1.color







