const https = require('https')
const fs = require('fs')

https.get('https://jsonplaceholder.typicode.com/users', res => {

    let body = ""
    res.on("data", data => {
        body += data
    })

    res.on("end", () => {
            fs.writeFile('test.html', body, (e) => {
                if (e) {
                    throw e;
                } else {
                    console.log("File downloaded!")
                }
            })
        })
        .on('error', () => console.log)

})