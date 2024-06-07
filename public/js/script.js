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
person,age = 80;
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
  if (age>=18) {
    'you are true';
  } else {
    'you are false';
  }
  
  // for loop
  for (let i=0; i<= 5; i++) {
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
11+12;
1+0.5;
45/7;
43-2;
45/24;
45%24;


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
fullname.slice(0,5)
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