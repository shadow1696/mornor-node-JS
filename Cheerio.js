const async = require('async')
const fs = request('fs')
const require = require('require')
const cheerio = require('cheerio')

const urls =[
    {
        name: 'Murad',
        url:'http://rov.wikia.com/wiki/Murad'
    },
    {   
        name: 'Preyta',
        url:'http://rov.wikia.com/wiki/Preyta'
    },
    {
        name: 'Valhein',
        url: 'http://rov.wikia.com/wiki/Valhein'
    },
    {       
        name: 'Taara',
        url: 'http://rov.wikia.com/wiki/Taara'
    }
    

]
const queue = async.queue((task, callback) =>  {
    request(url, (error, response, body) => {
        if (error){
            console.log(err)
            callback()
        $ = cheerio.load(body)
            }
        const text = $('mw-content-text p').text()
        fs.writeFile(task.name +".txt", text, (err) => {
            if (err){
                console.log(err)
                callback()
            }
            console.log("Save file complete")
            callback()
        })
    })
}, 1)
    queue.drain = () => {
        console.log("All process complete")
    }


queue.push(urls) 