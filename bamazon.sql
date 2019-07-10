DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL (10, 2) NULL,
    stock_quantity INT (100) NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Seven Wishes", "book", "15.99", "4"), 
("Super Bash Sisters", "video game", "59.99", "20"),
("Elf Ocarina", "toys", "24.99", "0"),
("Golden Butterflies", "album", "40.00", "1"),
("Masamune", "toys", "169.00", "3"),
("Phantom Mac", "electronics", "550.99", "30"),
("Prince of the Skies", "book", "25.00", "66"),
("Slay Station Portable", "electronics", "199.00", "23"),
("Hero Tunic", "clothes", "212.00", "5"),
("Wave Combat Book", "book", "40.00", "44"),
("Hero Wig", "cosmetics", "55.00", "2");

CREATE TABLE department (
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
over_head_costs DECIMAL (10, 2) NOT NULL,
total_profit DECIMAL (10, 2) NOT NULL, 
PRIMARY KEY(department_id)
);

INSERT INTO department (department_name, over_head_costs, total_profit)
VALUES 
("TOYS", 3000.00, 1200.00),
("FOOD", 4500.00, 6969.00),
("ELECTRONICS", 10000.00, 40000.00),
("PHARMACY", 5199.00, 6000.00),
("SPORTS", 1500.00, 1600.00);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'