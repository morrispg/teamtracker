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

async function viewAllDepartments() {
	const departmentData = await db.promise().query("select * from department")
	console.table(departmentData[0])
	mainMenu()
}

async function mainMenu() {
	const response = await inquirer.prompt([
		{
			type: "list",
			message: "Welcome to Employee Tracker, Please Select Your Next Option",
			choices: ["View Employees", "View All Roles", "View All Departments", "Add A Department", "Add A Role", "Add An Employee", "Exit"],
			name: "menu"
		}
	])
//////
	async function addADepartment() {
		const response = await inquirer.prompt
		("select * from department")
		console.table(response[0])
		mainMenu()
	}

	async function addARole() {
		const response = await inquirer.prompt
		("select * from department")
		console.table(response[0])
		mainMenu()
	}

	async function addAnEmployee() {
		const response = await inquirer.prompt
		("select * from department")
		console.table(response[0])
		mainMenu()
	}

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

if (response.menu === "Add A Department") {
	addADepartment()
}
if (response.menu === "Add A Role") {
	addARole()
}
if (response.menu === "Add An Employee") {
	addAnEmployee()
}
if (response.menu === "Exit") {
	process.exit()
}
}



mainMenu()