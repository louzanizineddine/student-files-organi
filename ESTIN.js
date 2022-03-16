const fs = require("fs");
const os = require("os");
const modules =  require("./moduleInfo")
class ESTIN {
    constructor() {
        this.year = "";
        this.semester = "";
        this.homeDir = os.homedir();
    }

    createEstinDir() {
        this.createFolder(`${this.homeDir}/estinFolderTest`)
    }

    yearDir() {
        this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}`)

    }

    semesterDir() {
        this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}/${this.semester}`)
    }

    modules () {
        let id = this.getSemester(this.year , this.semester);
        console.log(id)

        let filtredArray = modules.filter(function (el) {
            return el.id === id;
        })
        console.log(filtredArray)
        for (const module of filtredArray[0].modules) {
            this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}/${this.semester}/${module}`)
            this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}/${this.semester}/${module}/TD`)
            this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}/${this.semester}/${module}/Cours`)
            this.createFolder(`${this.homeDir}/estinFolderTest/${this.year}/${this.semester}/${module}/Ressources`)
        }
    }

    getSemester(year , semester) {
        if (year === "1cp" && semester === "first_semester") return 1;
        if (year === "1cp" && semester === "second_semester") return 2;
        if (year === "2cp" && semester === "first_semester") return 3;
        if (year === "2cp" && semester === "second_semester") return 4;
        if (year === "1cs" && semester === "first_semester") return 5;
        if (year === "1cs" && semester === "second_semester") return 6;
    }

    createFolder(folderName) {
        try {
            if (!fs.existsSync(folderName)) {

                fs.mkdirSync(folderName)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

}

module.exports = ESTIN
