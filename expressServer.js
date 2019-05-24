const express = require('express');

const app = express()

const user ={
    name: "Vijit",
    l_name : "Kamboj"
}

app.get('/' , (req,res) => {
    res.send("<h1> Hello World !!!! ,</h1>")

})

app.get('/user' , (req,res) => {
    res.send("Getting Profiles")              // automatically recognizes the content-type
})

app.post('/user' , (req,res) => {
               
})

app.listen(3000)

