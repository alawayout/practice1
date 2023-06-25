const path = require('path')



const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const data = require('./data');
const { request } = require('http');

app.use(express.json())

app.use(express.static(path.join(__dirname, 'static')))


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname });
})


app.post('/', (req, res) => {
    console.log(req.body)
    res.send(data[req.body.url])
})


app.get('/files/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'exm', req.params.name))
})


app.listen(8000, () => {
    console.log(`we are live on 8000`)
})
