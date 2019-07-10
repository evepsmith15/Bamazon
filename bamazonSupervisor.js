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
    }]).then(function (answer) {
        switch (answer.select) {
            case "View Products by Deparment":
                viewProductbyDepartment();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Exit":
                Exit();
                break;
        }
    });
}
//quits the terminal
function Exit() {
    console.log("Good-bye!");
    connection.end();
}

//view inventory exclusive to supervisor 
function viewProductbyDepartment() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        console.log("Product Sales by Department");
        console.log("____________________________"); //indent line
        var table = new Table({
            head: ["Department ID", "Department Name", "Overhead Costs", "Total Costs"],
            colWidths: [10, 25, 12, 12]
        });
        for (var i = 0; i < res.length; i++) {
            table.push([
                res[i].department_id,
                res[i].department_name,
                `$${res[i].over_head_costs}`
                `$${res[i].total_profit}`
            ])
        }
        console.log(table.toString());
        start();
    });
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
            //using validate so the command must have an input for the code to work
            validate: function (value) {
                if (!isNaN(value) && value > 0) {
                    return true;
                } //if the illegal number is (strings, dates, boolean, 0/0) 
                else {
                    return false;
                } //if the illegal number is an INT or DECIMAL
            }
        },
        {
            type: "input",
            name: "productSales", //Product Sales is needed to determine the total cost 
            message: "Product Sales: ",
            validate: function (value) {
                if (!isNaN(value) && value > 0) {
                    return true;
                } //if the illegal number is (strings, dates, boolean, 0/0) 
                else {
                    return false;
                } //if the illegal number is an INT or DECIMAL
            }

        }
    ]).then(function (answer) {
        connection.query('INSERT INTO department SET ?', {
                department_name: answer.departName,
                over_head_costs: answer.OverHeadCost,
                total_profit: (answer.productSales - answer.OverHeadCost)
            },
            function (err, res) {
                if (err) throw (err);
                console.log("New department added.");
            })
       viewProductbyDepartment();
    });
}
start();