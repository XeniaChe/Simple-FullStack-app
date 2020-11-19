const usersRouts = require('express').Router();

const users = [
  { name: 'John', age: 27 },
  { name: 'Jack', age: 19 },
  { name: 'Mack', age: 51 },
  { name: 'Sasin', age: 70 },
  { name: 'Richard', age: 34 },
  { name: 'Andrew', age: 42 },
];
usersRouts.get('/', (request, response) => {
  response.json(users);
});

module.exports = usersRouts;
