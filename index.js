const inquirer = require("inquirer");
const logo = require("asciiart-logo");
// const config = require("./package.json");
const db = require("./db");



// ascciartlogo


//begin function with inquire prompts
function init (){

    //make consolse banner with asciiart
    const logoMessage = logo({name: "Employee Manager"}).render();
    console.log(logoMessage);

    inquirer.prompt([
      {
        type:"list",
        name:"initialChoice",
        message:"What would you like to do?",
        choices:[
            "View all Employees",
            "Add Employee",
            "Update Employee Role",
            "View all Roles",
            "Add Role",
            "View all Departments",
            "Add Departmet"
        ],
      }  
    ])

    //send to switch case according to user choice

    .then((choice) => {
        switch(choice.initialChoice) {
        case "View all Employeesr":
            viewEmployees();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        case "View all Roles":
            viewRoles();
            break;
        case "Add Role":
            addRole();
            break;
        case "View all Departments":
            viewDepartmets();
            break;
        case "Add Departmet":
            addDepartment();
            break;
        //no default
        }
    })

}
init();