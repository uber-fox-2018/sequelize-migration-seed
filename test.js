const fs = require('fs')
<<<<<<< HEAD
const contactsJson = fs.readFileSync('./addresses.csv', 'utf8').split('\n')

let resultContact = []
for (let a = 0; a < contactsJson.length; a++) {
    let contact = contactsJson[a].split(',')
    if (contact != '') {
        let street  = contact[1]
        let zip_code = contact[2]
        resultContact.push({ street: street, zip_code: zip_code , createdAt : new Date, updatedAt : new Date})
    }
}

console.log(resultContact)
=======

let fileCsv = fs.readFileSync('./sequelize-migration-seed/contacts.csv', 'utf8').split('\n')
let arrCsv = []
for(let a=0; a<fileCsv.length; a++){
    if(fileCsv[a] != '') arrCsv.push({name : fileCsv[a].split(',')[1], email : fileCsv[a].split(',')[2], phone : fileCsv[a].split(',')[3], createdAt : new Date, updatedAt : new Date})  
}
console.log(arrCsv)
>>>>>>> d762cffe53b26c40a2281fe730a60787f674b87f
