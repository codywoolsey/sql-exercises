CREATE DATABASE employee_data;

USE employee_data;

CREATE TABLE departments (
    id INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT(11) AUTO_INCREMENT NOT NULL,
    department_id INT(11) DEFAULT NULL,
    `name` VARCHAR(255) NOT NULL,
    birthday DATETIME DEFAULT NULL,
    hire_date DATE NOT NULL,
    currently_employed TINYINT NOT NULL,
    PRIMARY KEY (id),
    INDEX idx_department_id (department_id),
    FOREIGN KEY (department_id)
        REFERENCES departments(id)
);

CREATE TABLE locations (
    id INT(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    state_code VARCHAR(2) NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY(id)
);

CREATE TABLE employee_locations (
    employee_id INT(11) NOT NULL,
    location_id INT(11) NOT NULL,
    INDEX idx_employee_id (employee_id),
    INDEX idx_location_id (location_id),
    FOREIGN KEY (employee_id)
        REFERENCES employees(id),
    FOREIGN KEY (location_id)
        REFERENCES locations(id)
);
