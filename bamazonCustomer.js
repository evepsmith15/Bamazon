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
  IDList();
});

//function lists the item you would like to buy from a list of 10 items
function IDList() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
          name: "list",
          type: "rawlist",
          choices: ["Seven Wishes", "Super Bash Sisters", "Elf Ocarina", "Golden Butterflies",
            "Masamune", "Phantom Mac", "Prince of the Skies", "Slay Station Portable", "Hero Tunic",
            "Wave Combat Book", "Hero Wig"
          ],
          message: "What would you like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many items would you like to buy?"
        },
      ])
      .then(function (input) {
        var quantity = input.stock_quantity;
        var chosenItem = input.id;
        order(chosenItem, quantity);
          });
      // };

  function order(id, currentStock) {
          connection.query('Select * FROM products WHERE = id' + id, function (err, res) {
            if (err) {
              console.log(err)
            };
            if (chosenItem === `${id}`) {
              if (currentStock <= res[0].stock_quantity) {
                var totalCost = res[0].price * currentStock;
                console.log("Item in stock!");
                console.log("Your total cost for " + currentStock + " " + res[0].product_name + " is " +
                  totalCost + " Thank you!");
                connection.query("UPDATE products SET stock_quantity = stock_quantity - " +
                  currentStock + "WHERE item_id = " + ID);
              } else {
                console.log("Insufficient quantity for " + res[0].product_name + ".");
              };
              IDList();
            }

      });
 // });
}
//for order
// choices: function () {
//   var choiceArray = [];
//   for (var i = 0; i < results.length; i++) {
//     choiceArray.push(results[i].item_name);
//   }
//   return choiceArray; put outside