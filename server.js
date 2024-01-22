const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/services',(req,res)=>{
    res.send('Services section')
})


app.listen(4000)