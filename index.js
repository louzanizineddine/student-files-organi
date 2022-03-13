const ESTIN = require('./firstYear')
const fs = require('fs');
const os = require("os");

let firstYearStudent = new ESTIN( "firstYear","first-semester");
firstYearStudent.createEstinDir();
firstYearStudent.yearDir()
firstYearStudent.semesterDir()
firstYearStudent.modules()
