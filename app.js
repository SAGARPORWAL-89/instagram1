const express = require('express')
// console.log(express)
const app = express()
const port = 4000
const web = require('./routes/web')
const ejs = require('ejs')
const connectdb = require('./db/connectdb')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

//for static pages 
app.set('view engine','ejs')

// for routes 
app.use('/',web)

// for connect database 
connectdb()

app.listen(port, () => {
    console.log(`server is running:${port}`)
})