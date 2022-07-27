const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const cTable = require("console.table");



// ascciartlogo


//begin function with inquire prompts
function init (){

    //make console message with asciiart
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
        // default:
        //     quit();
        }
    
    })
    

    function viewEmployees(){
        //table showing: employee ids, first names, last names, job titles, departments, salaries, and managers
        db.selectEmployeeTable()
        .then(([rows]) =>{
            let employees = rows;
            console.table(employees);
        })
    }



    function viewRoles(){

    }



    function viewDepartmets(){

    }



    function addDepartment(){


    }
}
init();