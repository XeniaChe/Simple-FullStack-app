const usersRouts = require('express').Router();

const db = {
  people: [
    { name: 'John', age: 27 },
    { name: 'Jack', age: 19 },
    { name: 'Mack', age: 51 },
    { name: 'Sasin', age: 70 },
    { name: 'Richard', age: 34 },
    { name: 'Andrew', age: 42 },
  ],
};

usersRouts.get('/', (request, response) => {
  response.status(200).json(db.people);
});

usersRouts.post('/', (request, response) => {
  const { name, age } = request.body;

  if (!name || !age) {
    return response.status(409).json({ error: 'Some input data is missing' });
  }

  //newName repeating check
  const nameRepeatCheck = db.people
    .map((el) => el.name.toLowerCase())
    .includes(name);

  if (nameRepeatCheck) {
    return response
      .status(409)
      .json({ error: 'person with this name already exists' });
  }

  const newPerson = {
    name: name,
    age: +age,
  };

  db.people = db.people.concat(newPerson);

  response.status(201).json(newPerson);
});

module.exports = usersRouts;
