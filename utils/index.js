const inquirer = require('inquirer');


const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'list',
        name: 'start',
        message: 'What do you want to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }
])
}


// run the app
promptUser()
