-- Drop the database if it exists
DROP DATABASE IF EXISTS employee_tracker;

-- Create the database
CREATE DATABASE employee_tracker;

-- Use the database
USE employee_tracker;

-- -- Source schema and seeds
-- SOURCE db/schema.sql;
-- SOURCE db/seeds.sql;

-- Create the department table
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

-- Create the role table
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  department VARCHAR(30),
  salary DECIMAL
);

-- Create the employee table
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  job_title VARCHAR(30),
  department VARCHAR(30),
  salary DECIMAL,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
