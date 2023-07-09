-- department table seed data
INSERT INTO department (id, name) VALUES
  (1, 'Finance'),
  (2, 'Marketing'),
  (3, 'Operations');

-- role table seed data
INSERT INTO role (id, title, department, salary) VALUES
  (1, 'Finance Manager', 'Finance',  1000000.00),
  (2, 'Operations Manager', 'Operations', 250000.00),
  (3, 'Project Coordinator', 'Operations', 250000.00),
  (4, 'Marketing Specialist', 'Marketing', 250000.00),
  (5, 'Human Resources Manager', 'Operations', 100000.00),
  (6, 'Accountant', 'Finance', 150000.00);
  

-- employee table seed data
INSERT INTO employee (id, first_name, last_name, job_title, department, salary, manager_id) VALUES
  (1, 'Bruce', 'Wayne', 'Finance Manager', 'Finance', 1000000.00, NULL),
  (2, 'Clark', 'Kent', 'Operations Manager', 'Operations', 250000.00, 1),
  (3, 'Barry', 'Allen', 'Project Coordinator', 'Operations', 250000.00, 2),
  (4, 'Oliver', 'Queen', 'Marketing Specialist', 'Marketing', 250000.00, 2),
  (5, 'Dick', 'Grayson', 'Human Resources Manager', 'Operations', 100000.00, 1),
  (6, 'Alfred', 'Pennyworth', 'Accountant', 'Finance', 150000.00, 1);

