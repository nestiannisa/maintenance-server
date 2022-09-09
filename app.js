require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/upload',express.static(path.join(__dirname,'/upload')));

const route = require('./routes');
app.use(route)

app.listen(port, () =>{
    console.log(`app listening on port: ${port}`)
})
