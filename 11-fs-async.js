const {readFile, writeFile} = require('fs') // destructured

//async readFile, we need to define a callback
console.log('start');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err) 
    {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err) 
        {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the results: ${first}, ${second}`,
        (err, result =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')

        })
        )
    })
})
console.log('starting the next task')

// IN ASYNC, WE START A TASK IT IMMEDIATELY GOES ON WITH THE CODE, IT DOESN'T WAIT FOR THAT TASK TO END
// WHEN THAT TASK ENDS, IT AUTOMATICALLY CALLS THE CALLBACK FUNCTION AND DOES WHATEVER IT IS NEEDED
