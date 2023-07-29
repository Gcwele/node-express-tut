const { readFile, writeFile } = require('fs')

console.log('start')

//Run callback when we are done
readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
     console.log(result)
    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log(result)

    writeFile(
    './content/result-async.txt', 
    `Here is the result`, (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log('done with this task')
    })
    })
})

console.log('staring next one')