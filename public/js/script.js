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