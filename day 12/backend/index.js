const express = require('express');
const port = 2006;

const app = express()
const db = require('./config')
const cors = require('cors');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/route'))

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('http://localhost:' + port);
    }
})
