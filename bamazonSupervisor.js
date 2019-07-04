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

//start the command list 
function start() {
inquier.prompt([{
    type: list,
    name: "select",
    message: "What would you like to do?",
    choices: ["View Product by Department", "Add Department", "Exit"]
}]).then(function(answer) {
    switch(answer.select){
        case "View Products by Deparment": viewProductbyDepartment();
        break;
        case "Add Department": addDepartment();
        break;
        case "End session": console.log("Good-bye!");
    }
})
}
//view inventory exclusive to supervisor 
function viewProductbyDepartment() {
    
}

//add a new department 
function addDepartment() {

}
start();