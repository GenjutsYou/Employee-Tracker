const inquirer = require('inquirer');
const EmployeeController = require('./controllers/employeeController');

function start() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    })
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          EmployeeController.viewAllDepartments(start);
          break;
        case 'View all roles':
          EmployeeController.viewAllRoles(start);
          break;
        case 'View all employees':
          EmployeeController.viewAllEmployees(start);
          break;
        case 'Add a department':
          EmployeeController.addDepartment(start);
          break;
        case 'Add a role':
          EmployeeController.addRole(start);
          break;
        case 'Add an employee':
          EmployeeController.addEmployee(start);
          break;
        case 'Update an employee role':
          EmployeeController.updateEmployeeRole(start);
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
      }
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
}

// Start the application
start();

