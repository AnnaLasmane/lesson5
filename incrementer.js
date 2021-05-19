import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/number.json`;

// try {
//     accessSync(filePath);
//     let number = readFileSync(filePath, 'utf8');
//     number = parseInt(number);
//     console.log(number);

//     const newValue = (number + 1) + '';
//     writeFileSync(filePath, newValue);

// } catch(err) {
//     console.error('Something went wrong', err);
// }



const storeData = (numberToAdd) => {
    try {
        accessSync(filePath);
        const jsonObject = readFileSync(filePath, 'utf8');
        const decodedObject = JSON.parse(jsonObject);
        console.log(`The current number was: ${decodedObject.number}`);
        decodedObject.number += numberToAdd;
        writeFileSync(filePath, JSON.stringify(decodedObject));

    } catch (err) {
        console.error('Something went wrong', err);
    }
}


rl.question('Please enter a number: ', (answer) => {
    storeData(parseInt(answer));
    rl.close();
})