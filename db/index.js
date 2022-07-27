const connection = require("./connection");

class Database {
    constructor(connection){
        this.connection = connection;
    }

selectEmployeeTable() {
    //table showing: employee ids, first names, last names, job titles, departments, salaries, and managers
    return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.department_id, role.salary" 
    )
}
}