const inquirer = require('inquirer');
var questions = require('./questions');

function userIn() {
    return inquirer.prompt(questions)
}
module.exports = userIn;