
const { Table } = require('console-table-printer');

function displayDepartments(departments) {
  const departmentTable = new Table({
    columns: [
      { name: 'Name', alignment: 'left' },
      { name: 'ID', alignment: 'left' },
    ]
  });
  departments.forEach((department) => {
    departmentTable.addRow({ Name: department.name, ID: department.id,  });
  });
  departmentTable.printTable();
}

function displayRoles(roles) {
  const roleTable = new Table({
    columns: [
      { name: 'Title', alignment: 'left' },
      { name: 'ID', alignment: 'left' },
      { name: 'Department', alignment: 'left' },
      { name: 'Salary', alignment: 'left' }
    ]
  });
  roles.forEach((role) => {
    roleTable.addRow({
      'Title': role.title,
      'ID': role.id,
      'Department': role.department,
      'Salary': role.salary
    });
  });
  roleTable.printTable();
}


function displayEmployees(employees) {
  const employeeTable = new Table({
    columns: [
      { name: 'ID', alignment: 'left' },
      { name: 'First Name', alignment: 'left' },
      { name: 'Last Name', alignment: 'left' },
      { name: 'Job Title', alignment: 'left' },
      { name: 'Department', alignment: 'left' },
      { name: 'Salary', alignment: 'left' },
      { name: 'Manager ID', alignment: 'left' }
    ]
  });
  employees.forEach((employee) => {
    employeeTable.addRow({
      ID: employee.id,
      'First Name': employee.first_name,
      'Last Name': employee.last_name,
      'Job Title': employee.job_title,
      'Department': employee.department,
      'Salary': employee.salary,
      'Manager ID': employee.manager_id
    });
  });
  employeeTable.printTable();
}

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees
};
