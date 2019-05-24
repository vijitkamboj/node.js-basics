const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const user ={
    name: "Vijit",
    l_name : "Kamboj"
}

app.get('/' , (req,res) => {
    res.send("<h1> Hello World !!!! ,</h1>")

})

app.get('/user' , (req,res) => {
              // automatically recognizes the content-type
})

app.post('/user' , (req,res) => {
    console.log(req.body);
    res.send(user)                 
})

app.listen(3000)

