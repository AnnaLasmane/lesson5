import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/names.json`;


const storeData = (name) => {
    try {
        const jsonObject = readFileSync(filePath, 'utf8');
        const decoded = JSON.parse(jsonObject);
        decoded.name = name;
        writeFileSync(filePath, JSON.stringify(decoded));
        console.log(`The new name is ${decoded.name} `);
    } catch (err) {
        console.error('Something wrong. The error is: ');
        console.error(err);
    };
};

const jsonObject = readFileSync(filePath, 'utf8');
const decoded = JSON.parse(jsonObject);
console.log(`The current name is: ${decoded.name}`);
rl.question('Please enter a new name: ', (answer) => {

    storeData(answer);
    rl.close();
});