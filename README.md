# Bamazon
Homework 10

Bamazon is discount Amazon where (fictional) items are put in the store and allows the user to buy them. This only works in the terminal. You can also manipulate the product information and adding new departments. 

Bamazon relies on three javascripts and a mysql to function. A package json and node modules are used to run the program. 

Bamazon allows the user to input the commands in the terminal. Bamazon Customer prioritizes the products in bamazon.sql. There are 10 items to choose from. First you pick the item and then bamazon will ask how many of the product you want. If the quantity you put in is more than the amount in stock, a message will tell you that the item is not in stock and goes back up a prompt. Otherwise, you purchase the item and the program ends. 

Manager is used to add, restock and delete products on the shelf. First, the prorgam will ask what you would like to do (you can exit out if you choose). In order to restock, you must input the ID and the stock quantity you would like to place (This does not affect the Customer portion.) Adding a product requires the id, name, department, price and quantity in order to be added to the table. Deleting a product just requires you to put the id of the product. 

Supervisor is used to add new departments and compare the overhead cost with the product sales in order to get the total sales. While the department graph only shows the total sales, one can infer that the total sales is obtained from taking the overhead cost and subtracting it from the product sales. 

Instructions on how to use/install bamazon: 
I. Make sure visual studio code is downloaded onto your computer.
II. Clone this repo (click the clone or download button and copy the link) 
III. Install the package using the terminal. npm init creates package.JSON. npm install creates the locked package.JSON.
 IV. Install the node modules.
V. The terminal can allow you access to all three javascripts when everything is installed. Customer allows you to buy an item from the product list. Supervisor allows you to add a department and manager allows you to add, restock and delete products. 

Technology used: Visual Studio Code: 
--> Javascript 
-> MySql
--> Inquirer
--> Cli-table (this installs a mini graph in the terminal)