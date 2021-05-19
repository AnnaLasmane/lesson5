import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/balance.json`;


rl.question('Do you want to add (+) money or withdraw (-) money? ', (answer) => {
    if (answer !== '+' && answer !== '-') {
        console.log('Please enter only + or - !');
        rl.close();
    } else {
        rl.question('How much? ', (amountToChange) => {
            try {
                accessSync(filePath);
                const jsonAmount = readFileSync(filePath, 'utf8');
                const decodedAmount = JSON.parse(jsonAmount);

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
            };
        })
    }
})