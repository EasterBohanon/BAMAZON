DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
id integer auto_increment not null,
product_name varchar(200),
department_name varchar(100),
price float(7,2),
stock_quantity integer(10),
PRIMARY KEY (id) 
 );
 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("charger", "electronics", 10, 100);
 
