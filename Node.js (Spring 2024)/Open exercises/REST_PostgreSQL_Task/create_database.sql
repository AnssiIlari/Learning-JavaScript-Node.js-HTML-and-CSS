-- PostgreSQL

-- Create customer database
CREATE DATABASE customer;

-- Connect to the customer database
-- \c customer

-- Create customers table
CREATE TABLE customers (
  id serial PRIMARY KEY,
  firstname VARCHAR (250) NOT NULL,
  lastname VARCHAR (250) NOT NULL,
  email VARCHAR (250) NOT NULL,
  phone VARCHAR (250) NOT NULL
);

-- Insert data into customers table
INSERT INTO customers (firstname, lastname, email, phone) VALUES ('John', 'Johnson', 'john@johnson.com', '8233243');
INSERT INTO customers (firstname, lastname, email, phone) VALUES ('Mary', 'Smith', 'mary@smith.com', '6654113');
INSERT INTO customers (firstname, lastname, email, phone) VALUES ('Peter', 'North', 'peter@north.com', '901176');

-- Query all data from customers table
SELECT * FROM customers;