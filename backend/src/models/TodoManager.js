const AbstractManager = require("./AbstractManager");

class TodoManager extends AbstractManager {
  constructor() {
    super({ table: "todo" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table} `);

    return rows;
  }

  async create(task) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (task, completed) VALUES (?, ?)`,
      [task, false]
    );

    return result.insertId;
  }

  async destroy(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id= ?`,
      [id]
    );
    return result;
  }
}

module.exports = TodoManager;
