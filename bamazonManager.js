var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
});

//prompts suggestions 
function storeCommands() {

}
//shows the current inventory
function displayInventory() {

}

//requests an inventory restock. Input data into the table
function restockRequest() {
//inquire.prompt([{}])

}

//adds products to items already in the table 
function restockProduct() {

}
//adds a new request
function addRequest() {
//inquire.prompt([{}])

}

//adds new product to the table
function addProduct(name, category, price, quantity) {
    connection.query('INSERT INTO products (id, product_name, department_name, price, stock_quantity) VALUES("' + id + '","' + name + '","' + category + '",' + price + ',' + quantity + ')');
    displayInventory();
}
//removes request when either rejected or new stock added
function removeRequest() {
//inquire.prompt([{}])
}

//remove a product from the inventory 
function removeProduct(id) {
    connection.query('DELETE FROM products WHERE id = ' + id);
    displayInventory();
}