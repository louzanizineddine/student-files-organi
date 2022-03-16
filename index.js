#!/usr/bin/env node 
import ESTIN from './ESTIN.js';
import fs from 'fs';
import os from 'os';
import inquirer from 'inquirer';


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
