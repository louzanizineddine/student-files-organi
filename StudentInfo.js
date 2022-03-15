const inquirer = require("inquirer");

module.exports.getInfo = function() {
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
                choices: ['first semester' , 'second semester'],
            },
        ])
        .then(answers => {
            // console.info('Answer:', answers.yearQuestion);
            // console.info('Answer:', answers.semesterQuestion);
            module.exports.studentInfoStudy = {year : answers.yearQuestion , semester : answers.semesterQuestion}
        });
}

