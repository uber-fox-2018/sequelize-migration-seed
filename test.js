const fs = require('fs')
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