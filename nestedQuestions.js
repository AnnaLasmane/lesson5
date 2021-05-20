import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Enter your first name:
//Enter your last name:
//Enter your email :
//Your data is: ${name} ${lastname} ${email}

// rl.question('Enter your first name: ', (firstName) => {
//     rl.question('Enter your last name: ', (lastName) => {
//         rl.question('Enter your email: ', (email) => {
//             console.log(`Your data is: ${firstName} ${lastName} ${email}`);
//             rl.close();
//         });
//     });
// });

new Promise((fulfil, reject) => {
    rl.question('Enter your first name: ', (firstName) => {
        if (firstName === ' ') {
            reject('First name was empty');
            return;
        }
        fulfil(firstName);
    })
}).then((output) => {
    return new Promise((fulfil) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Last name was empty');
                return;
            }
            fulfil(`${output} ${lastName}`);
        })
    })
}).then((output) => {
    return new Promise((fulfil) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Email was empty');
                return;
            }
            fulfil(`${output} ${email}`);
        })
    })
}).then((output) => {
    console.log(`Your data is ${output}`);

}).catch(() => {
    console.log('Invalid name');

}).finally(() => {
    rl.close();
})