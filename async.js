import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// rl.question('Enter your first name: ', (firstName) => {
//     rl.question('Enter your last name: ', (lastName) => {
//         rl.question('Enter your email: ', (email) => {
//             console.log(`Your data is: ${firstName} ${lastName} ${email}`);
//             rl.close();
//         });
//     });
// });

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

try {
    const firstName = await askQuestion1();
    const lastName = await askQuestion2();
    const email = await askQuestion3();
    console.log(`The data is: ${firstName}, ${lastName} and ${email}`);
} catch (e) {
    console.log(`Whoops, something went wrong. The eroor is: ${e}`);
}

// const callQuestion1 = async () => {
//     try {
//         return await askQuestion1();
//     } catch(e) {
//         console.log(`Whoops, something went wrong. The eroor is: ${e}`);
//         return await callQuestion1()
//     }
// }


// const firstName = await callQuestion1();
// try {
//     const email = await askQuestion3();
// } catch(e) {
//     console.log(`Whoops, something went wrong. The eroor is: ${e}`);
// }


// console.log(`The data is: ${firstName}, ${lastName} and ${email}`);

rl.close();