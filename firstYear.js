const fs = require("fs")
class ESTIN {
    constructor(year , semester) {
        this.year = year;
        this.semester = semester
        this.firstSemesterModules = ['analalyse-1' , "algebre-1" , "algo-1" , "archi-1" , "se-1" , "web"];
        this.secondSemesterModules = ["analalyse-2" , "algebre-2" , "algo-2" , "se-2" , "mequanique"]
    }

    createEstinDir() {
        this.createFolder('/home/zain/estinFolderTest')
    }

    yearDir() {
        this.createFolder(`/home/zain/estinFolderTest/${this.year}`)

    }
    semesterDir() {
        this.createFolder(`/home/zain/estinFolderTest/${this.year}/${this.semester}`)
    }

    modules () {
        for (const module of this.firstSemesterModules) {
            this.createFolder(`/home/zain/estinFolderTest/${this.year}/${this.semester}/${module}`)
            this.createFolder(`/home/zain/estinFolderTest/${this.year}/${this.semester}/${module}/TD`)
            this.createFolder(`/home/zain/estinFolderTest/${this.year}/${this.semester}/${module}/Cours`)
            this.createFolder(`/home/zain/estinFolderTest/${this.year}/${this.semester}/${module}/Ressources`)
        }
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
/*
*                           Documents
*                           ESTIN
*                           1CP
*                           first_semester || second semester
*                           ALGEBRE-1 analyse-2 algo-1 archi-1 ..........
*                           cours TDs
*                           chapitre-1 chapitre-2 ...........
*                           TD-01 TD-02
*
*/