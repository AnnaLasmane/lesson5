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


fs.access(dynamicFilename, (result) => {

    console.log(result);
});
// // console.log(dynamicFilename);
// // console.log(path.parse(dynamicFilename));