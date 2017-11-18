const async = require('async')
const require = require('require')
const item = []
const q = async.queue(function(task, callback) {
    request('http://apptitude.co.th/', (error, respons, body) => {
        if(error){
            console.log(error)
            callback()
        }
        console.log("statusCode from, apptitude" + respons && respons.statusCode)
        callback();    
    })
    
}, 100)


q.drain = function() {
    console.log('all items have been processed');
};

for(i=0; i < 10; i++){
    items.push({number: i})
}


q.push(items, (err) => {
    console.log('finished processing item')
})
