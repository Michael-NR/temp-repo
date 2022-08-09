const {readFileSync, writeFileSync} = require('fs') // destructured
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second)

writeFileSync('./content/result-sync.txt',
 `Here is the results : ${first}, ${second}`, 
 {flag: 'a'}
 )
// by default if the file isn't there it creates, if it already exists it replaces everything

console.log('done with this task')
console.log('starting the next one')