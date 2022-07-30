const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const Database = require("./db/index");
const cTable = require("console.table");
const connection = require("./db/connection");


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
        const query = "SELECT employee.id, employee.first_name, employee.last_name FROM employee"
        // , role.title, role.department_id, role.salary" 
       connection.query(query, (err, results) => {
        if(results){
            console.table(results);
            console.log(err);
            return initialPrompts();
        }
       })
    };


    function viewRoles(){
        const query = "SELECT role.title, role.id, role.department_id, role.salary FROM role" 
        connection.query(query, (err, results) => {
            if(results){
                console.table(results);
                console.log(err);
                return initialPrompts();
        }
        })
    };



    function viewDepartmets(){
        const query = "SELECT role.title, role.id, role.department_id, role.salary FROM role" 
        connection.query(query, (err, results) => {
            if(results){
                console.table(results);
                console.log(err);
                return initialPrompts();
        }
        })
    };
    

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
        console.log(answer);
        Database.addDepartmentName(answer)
        .then (([rows]) =>{
            let departmentName = rows;
            console.table(department);
        })
    })
    }

    function addRole(){
        //prompt to add the name, salary and department 
        //role is added tp database

        inquirer.prompt([
            { type:"input",
              name:"employeeName",
              message:"What is the name of your employee?"},
            { type:"input",
              name:"employeeSalary",
              message:"What salary does your employee receive?"},
            { type:"input",
              name:"employeeDep",
              message:"What Departement is your employee at?"}  
          ]) 

    .then((answer) => {
         console.log(answer.employeeName, answer.employeeSalary, answer.employeeDep);
        Database.addRoleInput(answer.employeeName)
        .then (([rows]) =>{
            let employeeName = rows;
            console.table(role);
            })
        })     
        
    }



}

init();