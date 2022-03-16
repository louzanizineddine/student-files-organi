const ESTIN = require('./ESTIN');
const fs = require('fs');
const os = require("os");
const inquirer = require("inquirer");

let sudent= new ESTIN()

inquirer
    .prompt([
        {
            type: 'list',
            name: 'yearQuestion',
            message: 'In which year you are currently stuying?',
            choices: ['1cp', '2cp' , '1cs'],
        },
        {
            type: 'list',
            name: 'semesterQuestion',
            message: 'First or second semester',
            choices: ['first_semester' , 'second_semester'],
        },
    ])
    .then(answers => {
        sudent.year = answers.yearQuestion;
        sudent.semester = answers.semesterQuestion;
        setUp()
    });

function setUp() {
    sudent.createEstinDir();
    sudent.yearDir();
    sudent.semesterDir();
    sudent.modules()
}
