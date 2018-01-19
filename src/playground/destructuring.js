// const person = {
//   name: 'Andrew',
//   age:26,
//   location: {
//     city: 'Philadelphia',
//     temp: 32
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Harry Potter',
//   author: 'J.K. Rolling',
//   publisher: {
//     // name: 'Next Tech'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// Array

const address = ['1901 Market Street', 'Philadelphia', 'Pennsylvania', '19103'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, small, medium, large] = item;

console.log(`A medium ${type} costs ${medium}`);
