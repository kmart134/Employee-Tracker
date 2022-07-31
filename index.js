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
        case "Add Role":
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
        const query = "SELECT department.name, department.id FROM department" 
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
        inquirer.prompt([
            {
                type:"input",
                name:"departmentInput",
                message:"What department would you like to add?"}  
            ])
            
    //departemnet is added to database
    .then(function tableTable(answer) {
        console.log(answer);
        const query = "INSERT INTO department SET?"
        connection.query(query, {
            name:answer.departmentInput
        }, function(error){
            if (error) throw error;
            console.log("check:department added");
        })
        initialPrompts();
        })
    };
    

    function addRole(){
        //prompt to enter name of role
        inquirer.prompt([
            {
                type:"input",
                name:"title",
                message:"What role would you like to add?"},
            {
                type:"input",
                name:"salary",
                message:"What is the salary for this new role?"},
            {
                type:"input",
                name:"department",
                message:"What is the department id for this new role?"},
            ])
            
    //role is added to database
    .then(function tableTwoTable(answer) {
        console.log(answer);
        const query = "INSERT INTO role SET?"
        connection.query(query, {
            title:answer.title,
            salary:answer.salary,
            department:answer.department

        }, function(error){
            if (error) throw error;
            console.log("check:role added");
        })
        initialPrompts();
        })
    }



};

init();