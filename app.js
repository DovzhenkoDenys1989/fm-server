const express = require('express');
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('./controllers/user.controller');
const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

app.post('/users', jsonParser, createUser);

app.get('/users/:id', getUser);

app.put('/users/:id', jsonParser, updateUser);

app.delete('/users/:id', deleteUser);

app.get('/users', getUsers);

app.get('*', (req, res) => {
  res.status(404).send('ERROR 404');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
