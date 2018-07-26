'use strict'

const fs = require('fs');

const contacts = () => {
    let contacts = [];
    let rowsStr = parseFile('./contacts.csv');
    rowsStr.forEach(str => {
        let row = str.split(',');
        let contact = {
            id: row[0],
            name: row[1],
            email: row[2],
            phone: row[3],
            createdAt: new Date,
            updatedAt: new Date,
        }
        contacts.push(contact);
    });
    return contacts;
}

const addresses = () => {
    let addresses = [];
    let rowsStr = parseFile('./addresses.csv');
    rowsStr.forEach(str => {
        let row = str.split(',');
        let address = {
            id: row[0],
            street: row[1],
            city: row[2],
            zip_code: row[3],
            createdAt: new Date,
            updatedAt: new Date
        }
        addresses.push(address);
    });
    return addresses;
}

const parseFile = (fileName) => {
    let fileContent = fs.readFileSync(fileName, 'utf8');
    return fileContent.split('\r\n');
}

module.exports = { contacts, addresses }