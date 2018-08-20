//Module Dependencies 
var mysql = require("mysql");
var inquirer = require("inquirer");

//Creates connection info for mysql database
var connection = mysql.createConnection({
    host: "localhost",

    //Your port; if not 3306
    port: 3306,

    user: "root", 

    password: "DexterAraquel22",
    database: "bamazon_db"
}); 

connection.connect(function (err) {
    if (err) throw err; 
    console.log("connected as id " + connection.threadId + "\n");

    start();
});

