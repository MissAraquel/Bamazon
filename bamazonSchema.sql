CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(222) NOT NULL,
	department_name VARCHAR(222) NOT NULL,
	price decimal(10,2) NOT NULL,
	stock_quantity INTEGER,
	PRIMARY KEY (item_id)
);


