// Asks for action "Please tell me wat to do": + | -
// Asks for amount "How much? "
// Print out current ballance "Current ballance is: 100"

import readline from 'readline';
import { accessSync, readFileSync, writeFileSync } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/numbers.json`;

rl.question('What do you want to do? ', (answer) => {
    if (answer !== '+' && answer !== '-') {
        console.log('Not a valid action, please go home!');
        rl.close();
        return;
    }

    rl.question('How much? ', (answer2) => {
        const answerAsNumber = parseFloat(answer2);
        if (isNaN(answerAsNumber)) {
            console.log('Not a number enterd');
            rl.close();
            return;
        }
        try {
            accessSync(filePath);
            const jsonObject = readFileSync(filePath, 'utf8');
            const tansactions = JSON.parse(jsonObject);
            const newLogEntry = {
                action: answer,
                amount: answerAsNumber
            }
            tansactions.push(newLogEntry);
            writeFileSync(filePath, JSON.stringify(tansactions));
            let balance = 0;
            for (let tansaction of tansactions) {
                if (tansaction.action === '+') {
                    balance += tansaction.amount;
                } else {
                    balance -= tansaction.amount;
                }
            }

            console.log(`The current balance is: ${balance}`);
            rl.close();
        } catch (err) {
            console.error('Something went wrong', err);
            rl.close();
        }
    });
})