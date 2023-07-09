
const departmentPrompt = [
  {
    type: 'input',
    name: 'department',
    message: 'Enter the department name:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a department name.';
      }
      return true;
    }
  }
];

const rolePrompt = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the role title:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a role title.';
      }
      return true;
    }
  },
  {
    type: 'number',
    name: 'salary',
    message: 'Enter the role salary:',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valid salary.';
      }
      return true;
    }
  },
  {
    type: 'number',
    name: 'departmentId',
    message: 'Enter the department ID for the role:',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valid department ID.';
      }
      return true;
    }
  }
];

const employeePrompt = [
  {
    type: 'input',
    name: 'firstName',
    message: "Enter the employee's first name:",
    validate: (input) => {
      if (input.trim() === '') {
        return "Please enter the employee's first name.";
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'lastName',
    message: "Enter the employee's last name:",
    validate: (input) => {
      if (input.trim() === '') {
        return "Please enter the employee's last name.";
      }
      return true;
    }
  },
  {
    type: 'number',
    name: 'roleId',
    message: 'Enter the role ID for the employee:',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valid role ID.';
      }
      return true;
    }
  },
  {
    type: 'number',
    name: 'managerId',
    message: "Enter the employee's manager ID (leave empty if none):",
    validate: (input) => {
      if (input.trim() !== '' && isNaN(input)) {
        return 'Please enter a valid manager ID or leave it empty.';
      }
      return true;
    }
  }
];

const updateEmployeeRolePrompt = (employeeChoices) => [
  {
    type: 'list',
    name: 'employeeId',
    message: 'Select the employee to update:',
    choices: employeeChoices
  },
  {
    type: 'number',
    name: 'roleId',
    message: 'Enter the new role ID for the employee:',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valid role ID.';
      }
      return true;
    }
  }
];

module.exports = {
  departmentPrompt,
  rolePrompt,
  employeePrompt,
  updateEmployeeRolePrompt
};
