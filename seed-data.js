const fs = require('fs')

let dataContact = fs.readFileSync('./addresses.csv', 'utf8').split('\n')

let temp = []
for(let i = 0; i < dataContact.length; i++){
    temp.push(dataContact[i].split(','))
}

let result = []
for(let j = 0; j < temp.length; j++) {
    let obj = {}
    obj.street = temp[j][1]
    obj.city = temp[j][2]
    obj.zip_code = temp[j][3]
    obj.createdAt = new Date
    obj.updatedAt = new Date
    result.push(obj)
}

console.log(result)


    

