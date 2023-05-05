// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
// Connect to database
const db = mysql.createConnection(
	{
		host: 'localhost',
		// MySQL username,
		user: 'root',
		// TODO: Add MySQL password here
		password: '1234Dogs',
		database: 'department_db'
	},
	console.log(`Connected to the department_db database.`)
);

async function viewEmployees() {
	const employeeData = await db.promise().query("select * from Employee")
	console.table(employeeData[0])
	mainMenu()
}

async function viewAllRoles() {
	const roleData = await db.promise().query("select * from role")
	console.table(roleData[0])
	mainMenu()
}

async function mainMenu() {
	const response = await inquirer.prompt([
		{
			type: "list",
			message: "Welcome to Employee Tracker, Please Select Your Next Option",
			choices: ["View Employees", "View All Roles", "View All Departments", "Exit"],
			name: "menu"
		}
	])
	console.log(response)
	if (response.menu === "View Employees") {
		viewEmployees()

	}
	if (response.menu === "View All Roles") {
		viewAllRoles()

	}
	if (response.menu === "View All Departments") {
		viewAllDepartments()
	}
	if (response.menu === "Exit") {
		process.exit()
	}
}
mainMenu()