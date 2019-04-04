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
 USE bamazon;
 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("charger", "electronics", 10, 100);
 
 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("umbrella", "apparel", 20, 100);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("cat back scratcher", "pets", 100, 50);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("sea monkeys", "novelties", 5, 100);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("happiness", "sarcasm", 1000.57, 100);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("banksy painting", "art", 50000.99, 1);
 
 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("headsets", "electronics", 15, 100);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("Hydroflask", "social currency", 60, 100);
 
 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("foot massager", "electronics", 300, 100);

 INSERT into products (product_name, department_name, price, stock_quantity)
 VALUES ("q-tips", "hygiene", 1, 100);
 
 SELECT * FROM products;
 
