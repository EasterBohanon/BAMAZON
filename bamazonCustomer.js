var mysql      = require('mysql');
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : 'root',
  database : 'bamazon'
});
 
let id;
let units;
// let name;
// let price;
let unitPrice;
let totalPrice


connection.connect(function (err) {
    if (err) throw err;
    
    displayErrthing();
});
 
function displayErrthing () {
    connection.query("SELECT * FROM products", function (err, res) {
  if (err) throw err;
  console.log("\n HELLO THERE LET'S GET STARTED!" + "\n------------------------------+\n")
  console.table(res);
  
  letsBegin(res);
  
});
}

function letsBegin() {
  inquirer
  .prompt({
    name: "Purchase",
    type: "rawlist",
    message: "Would you like to PURCHASE an Item",
    choices: ["YES", "NO"]
  })
  .then(function(answer) {
    // based on their answer, either call the bid or the post functions
    if (answer.Purchase.toUpperCase() === "NO") {
      post();
    }
    else {
      bidItem();
    }
  });
}

function bidItem() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the ID of the item you would like to PURCHASE:'
    },
    {
        type: 'input',
        name: 'units',
        message: 'How many would you like to PURCHASE?'
    }
]).then(function(answer) {
    id = parseInt(answer.id);
    units = parseInt(answer.units);

    checkStock(id, units);
})
}

function checkStock(id, units){
  let check = 'SELECT * FROM products WHERE ?';
  connection.query(check, {id : id}, function(err,res) {
      if (err) throw err;
      let inStock = parseInt(res[0].stock_quantity);
      if (units > inStock) {
          console.log("Sorry Fam, we don't have enough");
          connection.end();
      } else {
          updateDB(id, units, inStock);
      }
  });
}

function post(){
  console.log("Since you chose NO you can Post an item")
  inquirer.prompt(
    {
    name: "Post",
    type: "rawlist",
    message: "Would you like to POST an Item",
    choices: ["YES", "NO"]
  }).then(function(answer){
    if (answer.Post.toUpperCase()  === "YES"){
      postItem();
    } else {
      console.log("GOODBYE");
        connection.end();
    }
  });
}

function postItem (){
  inquirer.prompt(
    
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the item(s) you would like to POST:'
    },
    {
      type: 'input',
      name: 'department',
      message: 'Please enter the name of the item(s) you would like to POST:'
    },
    {
      type: 'input',
      name: 'price',
      message: 'Please enter the price of the item(s) you would like to POST:',
      
    },
    {
      type: 'input',
      name: 'units',
      message: 'Please enter the Quantity you Would like to POST:'
    }
  ).then(function(answer){
    connection.query(
      "INSERT INTO products SET ?",
      {
        
        product_name: answer.name,
        department_name: answer.department,
        price: parseInt(answer.price),
        stock_quantity: parseInt(answer.units)
      },
      function(err) {
        if (err) throw err;
        console.log("Your Item was added successfully!");
        // re-prompt the user for if they want to bid or post
       displayErrthing();
      }
    );
  });
}

function updateDB(id,units, inStock){
  let unitOrder = "UPDATE products SET stock_quantity = ? WHERE id = ?";
    let priceOrder = "SELECT price FROM products WHERE ?";
    let  amtInStock = inStock - units;

    connection.query(unitOrder, [amtInStock, id], function(err,res) {
        if (err) throw err;
    })
    connection.query(priceOrder, {id : id}, function(err,res) {
        if (err) throw err;
        unitPrice = parseFloat(res[0].price);
        totalPrice = unitPrice * units;
        console.log("Thank you for your purchase. Your total today is: $" + totalPrice);
    })
    connection.end();
}


 
