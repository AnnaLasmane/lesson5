import path from 'path';

import fs from 'fs';
// const filename = '/app/sub-folder/test.txt';
// console.log(path.basename(filename));
// console.log(path.dirname(filename));
// console.log(path.extname(filename));
// console.log(path.parse(filename));


// console.log(path.format({

//     root: '/',
//     base: 'test.txt',
//     dir: '/app/sub-folder'
// }));
// console.log(process.cwd());
// console.log(process);

const dynamicFilename = `${process.cwd()}/sub-folder/test.txt`;

// console.log(dynamicFilename);
// fs.access(dynamicFilename, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     fs.readFile(dynamicFilename, 'utf8', (err, contents) => {
//         console.log(contents);
//     })
// });
// // // console.log(dynamicFilename);
// // // console.log(path.parse(dynamicFilename));
try {
    fs.accessSync(dynamicFilename);
    fs.writeFileSync(dynamicFilename, 'Hello world yaya')
    const contents = fs.readFileSync(dynamicFilename, 'utf8');
    console.log(contents);
} catch (err) {
    console.error('Something went wrong. The error is: ');
    console.error(err);
}
console.error(1212131323);