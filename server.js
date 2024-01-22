const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/contact',(req,res)=>{
    res.send('This is Contact file')
})

app.listen(4000)