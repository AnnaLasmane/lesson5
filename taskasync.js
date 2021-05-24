import readline from 'readline';
import { accessSync, readFileSync, writeFileSync } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/taskasync.json`;

const askQuestion1 = async() => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                reject('Please fill the first name');
                return;
            }

            fulfil(firstName);
        })
    });
}
const askQuestion2 = async() => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill the last name');
                return;
            }

            fulfil(lastName);
        })
    });
}
const askQuestion3 = async() => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill the email');
                return;
            }

            fulfil(email);
        })
    });
}
const askQuestion4 = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your age: ', (age) => {
            if (age === '' || isNaN(age) === true || age <= 0) {
                reject('Please enter valid age');
                return;
            }
            fulfill(age);
        })
    })
}

const askQuestion5 = async() => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your adress: ', (address) => {
            if (address === '') {
                reject('Please fill the address');
                return;
            }

            fulfil(address);
        })
    });
}

try {
    accessSync(filePath);
    const jsonObject = readFileSync(filePath, 'utf8');
    const tansactions = JSON.parse(jsonObject);

    const firstName = await askQuestion1();
    const lastName = await askQuestion2();
    const email = await askQuestion3();
    const age = await askQuestion4();
    const address = await askQuestion5();



    const newLogEntry = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        address: address
    }

    writeFileSync(filePath, JSON.stringify(newLogEntry));


    console.log(`The data is: ${firstName}, ${lastName}, ${email}, ${age}, ${address}`);
} catch (e) {
    console.log(`Whoops, something went wrong. The eroor is: ${e}`);
}


rl.close();