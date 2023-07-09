const connection = require('../utils/connection');

class Department {
  constructor(name) {
    this.name = name;
  }

  static getAllDepartments() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM department', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO department SET ?', this, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Department;
