DROP TABLE IF EXISTS department
DROP TABLE IF EXISTS roles
DROP TABLE IF EXISTS  employee

CREATE TABLE department (
id INTEGER PRIMARY KEY,
dep_name VARCHAR(30)
);

CREATE TABLE roles (
id INTEGER PRIMARY KEY,
title VARCHAR(30),
salary: DECIMAL(10,2),
department_id INTEGER
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER NULL
);