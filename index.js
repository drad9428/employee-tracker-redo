const inquirer = require("inquirer");
const table = require('console.table');
const q = require("./src/inquirer");

const ml = require("./logic/menuLogic");
const { teamManager } = require("./src/tableNames");
const { getEmps } = require("./utils/employees")

const menuLogic = ({ mainMenu }) => {
    switch(mainMenu){
        case "Show Employees": 
            ml.showEmployees().then(data => {startApp()})
            break;

        case "Show All Departments":
           ml.showDepartments().then(results => {startApp()});
            break;

        case "Show All Roles":
            ml.showRoles().then(results => {startApp()});
            break;

        case "Add New Employee":
            ml.newEmployee().then(data => {startApp()}).catch(err => {
                console.log("\nAn Error Occurred: ", err.error + "\n");
                startApp();
            });
            break;

        case "Add New Department":
            ml.newDepartment().then(data => {startApp()}).catch(err => {
                console.log("\nAn Error Occurred: ", err.error + "\n");
                startApp();
            });
            break;
        case "Add New Role":
            ml.newRole().then(data => {startApp()}).catch(err => {
                console.log("\nAn Error Occurred: ", err.error + "\n");
                startApp();
            });
            break;
        case "Update Employee":
            ml.updateEmployee().then(data => {startApp()}).catch(err => {
                console.log("\nAn Error Occurred: ", err.error + "\n");
                startApp();
            });
            break;
        case "EXIT APPLICATION":
            quitApp();
            break;
    }
}

const startApp = () => {
    inquirer.prompt (q.mainMenu)
    .then(answers => {
        return menuLogic(answers);
    })
}

const quitApp = () => {
    console.log("Goodbye!");
    process.exit();
}

console.log(teamManager)
getEmps().then(results => {console.log("\nCurrent Team:\n");console.table(results)}).then(()=>{startApp();})
