const connection = require('../utils/connection');

class Employee {
  constructor(firstName, lastName, roleId, managerId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }

  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employee', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO employee SET ?', this, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Employee;
