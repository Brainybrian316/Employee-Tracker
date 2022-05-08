// modules 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
require('console.table');

//  function for initial prompt
function initialPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'initial',
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employees",
            "Update Employee Role",
            "Add Role",
            "End"
        ]
    })
}

initialPrompt()