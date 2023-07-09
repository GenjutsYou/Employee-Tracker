const inquirer = require('inquirer');
const Queries = require('../utils/queries');
const { displayDepartments, displayRoles, displayEmployees } = require('../views/display');
const prompts = require('../views/prompts');

class EmployeeController {
  static async viewAllDepartments(start) {
    try {
      const departments = await Queries.getAllDepartments();
      displayDepartments(departments);
      start();
    } catch (err) {
      console.error('Error retrieving departments:', err);
    }
  }

  static async viewAllRoles(start) {
    try {
      const roles = await Queries.getAllRoles();
      displayRoles(roles);
      start();
    } catch (err) {
      console.error('Error retrieving roles:', err);
    }
  }

  static async viewAllEmployees(start) {
    try {
      const employees = await Queries.getAllEmployees();
      displayEmployees(employees);
      start();
    } catch (err) {
      console.error('Error retrieving employees:', err);
    }
  }

  static async addDepartment(start) {
    try {
      const departmentData = await inquirer.prompt(prompts.departmentPrompt);
      await Queries.addDepartment(departmentData);
      console.log('Department added successfully!');
      start();
    } catch (err) {
      console.error('Error adding department:', err);
    }
  }

  static async addRole(start) {
    try {
      const roleData = await inquirer.prompt(prompts.rolePrompt);
      await Queries.addRole(roleData);
      console.log('Role added successfully!');
      start();
    } catch (err) {
      console.error('Error adding role:', err);
    }
  }

  static async addEmployee(start) {
    try {
      const employeeData = await inquirer.prompt(prompts.employeePrompt);
      await Queries.addEmployee(employeeData);
      console.log('Employee added successfully!');
      start();
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  }

  static async updateEmployeeRole(start) {
    try {
      const employees = await Queries.getAllEmployees();
      const employeeChoices = employees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }));

      const { employeeId, roleId } = await inquirer.prompt(prompts.updateEmployeeRolePrompt(employeeChoices));

      await Queries.updateEmployeeRole(employeeId, roleId);
      console.log('Employee role updated successfully!');
    } catch (err) {
      console.error('Error updating employee role:', err);
    }
  }
}

module.exports = EmployeeController;
