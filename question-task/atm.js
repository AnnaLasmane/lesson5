// 2. ATM
// Asks for action "Please tell me wat to do": + | -
// Asks for amount "How much? "
// Print out current ballance "Current ballance is: 100"
import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/balance.json`;


rl.question('Do you want to add (+) money or withdraw (-) money? ', (answer) => {
    if (answer !== '+' &&
        answer !== '-') {
        console.log('Please enter only + or - !');
        rl.close();
        return;
    } else {
        rl.question('How much? ', (amountToChange) => {
            const answerAsNumber = parseFloat(amountToChange);
            if (isNaN(answerAsNumber)) {
                console.log('Not a number entered');
                rl.close();
                return;
            }
            try {
                accessSync(filePath);
                const jsonAmount = readFileSync(filePath, 'utf8');
                const decodedAmount = JSON.parse(jsonAmount);
                console.log(decodedAmount);
                if (answer === '+') {
                    decodedAmount.balance = decodedAmount.balance + parseInt(amountToChange);
                } else {
                    decodedAmount.balance = decodedAmount.balance - parseInt(amountToChange);
                };

                writeFileSync(filePath, JSON.stringify(decodedAmount));
                console.log(`Current balance is: ${decodedAmount.balance} EUR`);
                rl.close();

            } catch (err) {
                console.error('Something went wrong', err);
                rl.close();
            };
        })
    }
})