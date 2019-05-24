const express = require('express');

const app = express()

const user ={
    name: "Vijit"
}
app.get('/user' , (req,res) => {
    res.send(user)
})
app.get('/' , (req,res) => {
    res.send("<h1> Hello World !!!! ,</h1>")

})
app.listen(3000)

