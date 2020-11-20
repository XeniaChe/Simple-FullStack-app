const usersRouts = require('express').Router();

let users = [
  { name: 'John', age: 27 },
  { name: 'Jack', age: 19 },
  { name: 'Mack', age: 51 },
  { name: 'Sasin', age: 70 },
  { name: 'Richard', age: 34 },
  { name: 'Andrew', age: 42 },
];

usersRouts.get('/', (request, response) => {
  response.status(200).json(users);
});

usersRouts.post('/', (request, response) => {
  const { name, age } = request.body;

  if (!name || !age) {
    return response.status(409).json({ error: 'Some input data is missing' });
  }

  //newName repeating check
  let nameRepeatCheck = users.map((el) => el.name).includes(name);
  if (nameRepeatCheck) {
    return response
      .status(409)
      .json({ error: 'person with this name already exists' });
  }

  const newPerson = {
    name: name,
    age: +age,
  };

  users = users.concat(newPerson);

  response.status(201).json(newPerson);
});

module.exports = usersRouts;
