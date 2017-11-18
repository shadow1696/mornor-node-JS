const express = require('express')
const app = express()
app.get('/' ,(req, res) => {
    res.send('Hello world')
})

app.get('/' ,(req, res) => {
    res.status(200).json({
        name: "Chonlaree",
        NickName: "Sean"
    })
})
app.listen(3333, () => {
    console.log("listen no port 3333")
})