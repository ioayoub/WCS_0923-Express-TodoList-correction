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

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await tables.todo.destroy(id);

    res.status(200).json({
      message: `id ${id} is deleted.`,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { browse, read, edit, add, remove };
