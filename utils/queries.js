const pool = require('./connection');

class Queries {
  static getAllDepartments() {
    return pool.query('SELECT * FROM department')
      .then(([rows]) => {
        return rows;
      })
      .catch((err) => {
        console.error('Error retrieving departments:', err);
        throw err;
      });
  }

  static getAllRoles() {
    return pool.query('SELECT * FROM role')
      .then(([rows]) => {
        return rows;
      })
      .catch((err) => {
        console.error('Error retrieving role:', err);
        throw err;
      });
  }

  static getAllEmployees() {
    return pool.query('SELECT * FROM employee')
      .then(([rows]) => {
        return rows;
      })
      .catch((err) => {
        console.error('Error retrieving employee:', err);
        throw err;
      });
  }

  static addDepartment(department) {
    return pool.query('INSERT INTO department SET ?', department);
  }
  

  static addRole(role) {
    return pool.query('INSERT INTO role SET ?', role);
  }

  static addEmployee(employee) {
    return pool.query('INSERT INTO employee SET ?', employee);
  }

  static updateEmployeeRole(employeeId, roleId) {
    return pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  }
}

module.exports = Queries;
