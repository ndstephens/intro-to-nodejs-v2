import express from 'express';
import morgan from 'morgan';

const db = {
  todos: [],
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/todo', (req, res) => {
  res.status(200).json({ data: db.todos });
});

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text };
  db.todos.push(newTodo);

  res.status(201).json({ data: newTodo });
});

app.listen(8000, () => {
  console.log('Server on http://localhost:8000');
});
