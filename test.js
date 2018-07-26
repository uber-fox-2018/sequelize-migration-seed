const fs = require('fs')

let fileCsv = fs.readFileSync('./sequelize-migration-seed/contacts.csv', 'utf8').split('\n')
let arrCsv = []
for(let a=0; a<fileCsv.length; a++){
    if(fileCsv[a] != '') arrCsv.push({name : fileCsv[a].split(',')[1], email : fileCsv[a].split(',')[2], phone : fileCsv[a].split(',')[3], createdAt : new Date, updatedAt : new Date})  
}
console.log(arrCsv)