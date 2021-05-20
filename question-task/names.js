// 1. Task
// Print out the name ex: "The curent name is: Jānis"
// Ask for a new name: "Please enter a new name: " (enters "Anna")
// Print out the name ex: "The new name is: Anna"
// exit

import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/names.json`;


const storeData = (newName) => {
    try {
        accessSync(filePath);
        const jsonObject = readFileSync(filePath, 'utf8');
        const decoded = JSON.parse(jsonObject);
        decoded.name = newName;
        writeFileSync(filePath, JSON.stringify(decoded));
        console.log(`The new name is ${decoded.name} `);
    } catch (err) {
        console.error('Something wrong. The error is: ', err);
    };
};

const jsonObject = readFileSync(filePath, 'utf8');
const decoded = JSON.parse(jsonObject);
console.log(`The current name is: ${decoded.name}`);
rl.question('Please enter a new name: ', (answer) => {

    storeData(answer);
    rl.close();
});