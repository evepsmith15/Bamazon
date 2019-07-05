var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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

//creates a new table and then displays the list of commands
function storeCommands() {

displayInventory();
}

//gives you the commands for manager
function displayInventory() {
    inquirer.prompt([{
        type: "input",
        name: "command",
        message: "Choose what you would like to do.",
        choices: ["Restock Product", "Add New Product", "Remove Existing Product"]
    }]).then(function(answer){
        switch(answer.command){
            case "Restock Product": restockRequest();
            break;
            case "Add New Product": addRequest();
            break;
            case "Remove Existing Product": removeRequest();
            }
        });
    };

//requests an inventory restock. Input data into the table
function restockRequest() {
    inquire.prompt([{
        type: "input",
        name: "id",
        message: "What is the item ID that you would like to restock?"
    },
    {
        type: "input",
        name: "Quantity",
        message: "How much would you like to add?"
    },
    ]).then(function(answer){
        var qAdd = answer.Quantity;
        var ProductID = answer.id;
        restockProduct(ProductID, qAdd);
    });
    };

//adds products to items already in the table 
function restockProduct(id, quantity) {

}
//adds a new request
function addRequest() {
    inquire.prompt([{
        type: "input",
        name: "id",
        message: "Enter ID number..."
    },
    {
        type: "input",
        name: "Name",
        message: "Enter the name of the product..."
    },
    {
        type: "input",
        name: "Category",
        message: "Enter the category of said product..."
    },
    {
        type: "input",
        name: "Price",
        messasge: "What is the price of the product?"
    },
    {
        type: "input",
        name: "Quantity",
        message: "Enter the amount of the product..."
    },
    ]).then(function(answer){
        var id = answer.id;
        var name = answer.Name;
        var category = answer.Category;
        var price = answer.Price;
        var quantity = answer.Quantity;
        addProduct(id, name, category, price, quantity);
        });
    };

//adds new product to the table
function addProduct(name, category, price, quantity) { //id not needed to be listed
    connection.query('INSERT INTO products (id, product_name, department_name, price, stock_quantity) VALUES("' + id + '","' + name + '","' + category + '",' + price + ',' + quantity + ')');
    storeCommands();
}

//removes request when either rejected or new stock added
function removeRequest() {
    inquire.prompt([{
        type: "input",
        name: "id",
        message: "What would you like to remove?"
    }]).then(function(answer){
        var id = answer.id;
        removeProduct(id);
    });
};

//remove a product from the inventory 
function removeProduct(id) {
    connection.query('DELETE FROM products WHERE id = ' + id);
    storeCommands();
}

storeCommands(); //calls for the command to start while everything loads