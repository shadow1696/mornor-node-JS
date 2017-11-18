const async = require('async')
const require = request('request')
const item = []
const q = async.queue(function(task, callback) {
    fs.writefile("mn"+tast.number +".txt", "this is from process:" + tasf.numbe, () =>{
        console.log("Create file" + task.numbe + "complete")
        callback();    
    })
    
}, 1)

// assign a callback
q.drain = () => {
    console.log('all items have been processed');
};

for(i=1; i <= 100; i++){
    items.push({number: i})
}

// add some items to the queue
q.push(items, (err) => {
    console.log('finished processing item')
})