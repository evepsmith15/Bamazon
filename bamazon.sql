DROP DATABASE IF EXISTS bamazon;
DROP DATABASE IF EXISTS department;

CREATE DATABASE bamazon;
CREATE DATABASE department;

USE bamazon;
USE department;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(30) NULL,
    price INT NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE department (
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NULL,
over_head_costs INT NULL AUTO_INCREMENT,
product_sales INT NULL AUTO_INCREMENT,
total_profit INT NULL, 
PRIMARY KEY(department_id)
);

SELECT * FROM products;

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("43", "Seven Wishes", "book", "15.99", "4");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("662", "Super Bash Sisters", "video game", "59.99", "20");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("851", "Elf Ocarina", "toys", "24.99", "0");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("69", "Golden Butterflies", "album", "40.00", "1");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("777", "Masamune", "toys", "169.00", "3");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("1202", "Phantom Mac", "electronics", "550.99", "30");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("50", "Prince of the Skies", "book", "25.00", "66");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("1300", "Slay Station Portable", "electronics", "199.00", "23");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("453", "Hero Tunic", "clothes", "212.00", "5");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("696", "Wave Combat Book", "book", "40.00", "44");

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ("454", "Hero Wig", "cosmetics", "55.00", "2");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'