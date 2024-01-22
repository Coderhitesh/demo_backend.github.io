const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/services',(req,res)=>{
    res.send('Services section')
})

addEventListener.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(4000)