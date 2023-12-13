// BREAD

const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const todos = await tables.todo.readAll();

    res.json(todos);
  } catch (e) {
    console.error(e);
  }
};

const read = () => {};

const edit = () => {};

const add = async (req, res) => {
  const { task } = req.body;

  try {
    const insertId = await tables.todo.create(task);

    res.status(201).json({ insertId });
  } catch (e) {
    console.error(e);
  }
};

const remove = () => {};

module.exports = { browse, read, edit, add, remove };
