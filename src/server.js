 var express = require('express');
var validator = require('validator');
var mysql=require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'remotemysql.com:3306',
  port:3306,
  user : 'GGty3yyTK2',
  password : '4ydXtkYOXL',
  database : 'GGty3yyTK2'  
});

connection.connect(function (err){
    if(!!err){
        console.log("error : ", mysqli_error())
    }else{
        console.log("connected")

    }
})