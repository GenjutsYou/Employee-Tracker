const connection = require('../utils/connection');

class Role {
  constructor(title, salary, departmentId) {
    this.title = title;
    this.salary = salary;
    this.departmentId = departmentId;
  }

  static getAllRoles() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM role', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO role SET ?', this, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Role;
