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
  IDList();
});

//function lists the item you would like to buy from a list of 10 items
function IDList() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    //a table needs to be added that will push the data in the sql. 
    var table = new Table({
      head: ["ID", "Product Name", "Department", "Price", "Quantity"],
      colWidths: [10, 25, 25, 10, 14]
    });
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].id,
          res[i].product_name,
          res[i].department_name,
          res[i].price,
          res[i].stock_quantity
        ]);
    }
    console.log(table.toString()); //displays the table
    var choices = ["Seven Wishes", "Super Bash Sisters", "Elf Ocarina", "Golden Butterflies",
      "Masamune", "Phantom Mac", "Prince of the Skies", "Slay Station Portable", "Hero Tunic",
      "Wave Combat Book", "Hero Wig"
    ];

    inquirer.prompt([{
          type: "rawlist",
          name: "list",
          choices: ["Seven Wishes", "Super Bash Sisters", "Elf Ocarina", "Golden Butterflies",
            "Masamune", "Phantom Mac", "Prince of the Skies", "Slay Station Portable", "Hero Tunic",
            "Wave Combat Book", "Hero Wig"
          ],
          message: "What would you like to buy?"
        },
        {
          type: "input",
          name: "quantity",
          message: "How many items would you like to buy?",
          filter: Number
        },
      ])
      .then(function (input) {
        // console.log(input.list);
        var quantity = input.quantity;
        var itemID = choices.indexOf(input.list);
        // console.log(itemID);
        //console.log(choices);
        order(itemID, quantity);
      });
  });

  function order(id, quantity) {
    connection.query("SELECT * FROM products WHERE id =? ", [id], function (err, res) {
      if (err) throw err;
      console.log(id);
      console.log(res);
      for (var i = 0; i < res.length; i++) {
        if (quantity < res[i].stock_quantity) {
          console.log("Item in stock!");
          connection.query("UPDATE products SET ? WHERE ?"), [{
                stock_quantity: (stock_quantity - quantity)
              },
              {
                id: id
              }
            ],
            function (err, res) {
              if (err) throw err;
              var totalCost = res[0].price * quantity;
              console.log("Your total cost for " + res[i].product_name + " is " + totalCost + " Thank you!");
              connection.end();
            }
        } else {
          console.log("Insufficient quantity for " + res[i].product_name + ".");
          IDList();
        };
      }
    });
  };
}