const express = require('express');
const app = express();



app.post('/test-post',(req,res) => {

    console.log(req)

    res.send({
        "success" : true
    })
})




module.exports = app;