const { query } = require("./connection");
const connection = require("./connection");

class Database {
    constructor(connection){
        this.connection = connection;
    }

getEmployeeTable() {
    //table showing: employee ids, first names, last names, job titles, departments, salaries, and managers
    return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.department_id, role.salary" 
    )
};

getRoleTable() {
    //table showing:job title, role id, the department that role belongs to, and the salary
    return this.connection.promise().query(
    "SELECT role.title, role.id, role.department_id, role.salary"
    )
};

addDepartmentName() {
    //departement from OG Index.js is added 
    return this.connection.promise().query(
    "INSERT INTO department"  
    )
};




}