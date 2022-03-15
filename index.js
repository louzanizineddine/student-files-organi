const ESTIN = require('./firstYear');
const fs = require('fs');
const os = require("os");
const {getInfo , studentInfoStudy} = require("./StudentInfo");

// let firstYearStudent = new ESTIN( "firstYear","first-semester");
getInfo();
console.log(studentInfoStudy)
// firstYearStudent.createEstinDir();
// firstYearStudent.yearDir()
// firstYearStudent.semesterDir()
// firstYearStudent.modules()
