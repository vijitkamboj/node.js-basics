const express = require('express');

const app = express()

const user ={
    name: "Vijit"
}

app.use( (req,res,next) => {
    console.log("Hi I exucute before any of the request methods below");
    next() // Hi I pass down the control
})

app.get('/' , (req,res) => {
    res.send(user)

})
app.listen(3000)

