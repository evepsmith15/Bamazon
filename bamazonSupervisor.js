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
    inquirer.prompt([{
    type: "list",
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
});
}
//view inventory exclusive to supervisor 
function viewProductbyDepartment() {
    connection.query('SELECT * FROM department ', function(err, res){
        if (err) throw (err);
        console.log("Product Sales by Department");
        console.log("____________________________"); //indent line
        for(var i = 0; i < res.length; i++) {
            console.log("Department ID: " + res[i].department_ID + 
            " | " + "Department Name: " + res[i].department_name + 
            " | " + "Over Head Cost: " + (res[i].over_head_costs).toFixed(2) + 
            " | " + "Product Sales: " + (res[i].total_profit).toFixed(2) + 
            " | " + "Total Profit: " + (res[i].total_profit - res[i].over_head_costs).toFixed(2));
            console.log("________________________"); //indent line
        }
        start();
    })
}

//add a new department 
function addDepartment() {
inquirer.prompt([{
    type: "input",
    name: "departName",
    message: "Department Name: "
},
{
    type: "input",
    name: "OverHeadCost",
    message: "Over Head Cost: ",
    default: 0,
    //using validate so the command must have an input for the code to work
    validate: function(value) {
        if (isNaN(value) === false) {return true;} //if the illegal number is (strings, dates, boolean, 0/0) 
        else {return false;} //if the illegal number is an INT or DECIMAL
    }
},
{
    type: "input",
    name: "productSales", //Product Sales is needed to determine the total cost 
    message: "Product Sales: ",
    default: 0,
    validate: function(val){
        if (isNaN(value) === false) {return true;} //if the illegal number is (strings, dates, boolean, 0/0) 
        else {return false;} //if the illegal number is an INT or DECIMAL
    }

}]).then(function(answer){
    connection.query('INSERT INTO department SET ?', {
        Department: answer.departName,
        OverHeadCosts: answer.OverHeadCost,
        TotalProfit: answer.productSales
    },
    function(err, res) {
        if(err) throw (err);
        console.log("New department added.");
    })
    start();
});
}
start();