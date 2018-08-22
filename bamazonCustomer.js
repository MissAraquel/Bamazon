//Module Dependencies 
var mysql = require("mysql");
var inquirer = require("inquirer");

//Creates connection info for mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "DexterAraquel22",
    database: "bamazon_db"
}); 

connection.connect(function (err) {
    if (err) throw err; 
    console.log("connected as id " + connection.threadId + "\n");

    displayProducts();
});


//Function to display ids, names and prices of products for sale
function displayProducts() {
    console.log("View our inventory!\n");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + " Item: " + res[i].product_name + " Price: " + res[i].price)
        }
    })
};

