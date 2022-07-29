const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const cTable = require("console.table");


//begin function with inquire prompts
function init (){

    //make console message with asciiart
    const logoMessage = logo({name: "Employee Manager"}).render();
    console.log(logoMessage);

    initialPrompts();

function initialPrompts (){
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
        case "View all Employees":
            viewEmployees();
            break;
        case "View all Roles":
            viewRoles();
            break;
        case "View all Departments":
            viewDepartmets();
            break;
        case "Add Departmet":
            addDepartment();
            break;
        case "Add a Role":
            addRole();
            break;
        case "Add an Employee":
            addEmployee();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        // default:
        //     quit();
        }
    
    })
    };

    function viewEmployees(){
        //table showing: employee ids, first names, last names, job titles, departments, salaries, and managers
        db.getEmployeeTable()
        .then(([rows]) =>{
            let employees = rows;
            console.table(employees);
        })
        .then(() => initialPrompts());
    }



    function viewRoles(){
        //table showing:job title, role id, the department that role belongs to, and the salary
        db.getRoleTable()
        .then(([rows]) => {
            let role = rows;
            console.table(role);
        })
    }



    function viewDepartmets(){
        //table showing: department names and department ids
        db.getDepartmentTable()
        .then(([rows]) =>{
            let department = rows;
            console.table(role);
        })

    }



    function addDepartment(){
        //prompt to enter name of departemnt
        //departemnet is added to database
        inquirer.prompt([
            {
              type:"input",
              name:"departmentInput",
              message:"What department would you like to add?"}  
          ])

    .then((answer) => {
        const deptName= answer;
        console.log(answer);
        db.addDepartmentName(answer)
        .then (([rows]) =>{
            let departmentName = rows;
            console.table(role);
        })
    })
    }



}

init();