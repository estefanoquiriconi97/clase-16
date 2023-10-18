const express = require('express');
const path = require('path');
const app = express()
const port = 3030;

app.use(express.static(path.resolve('public')));

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('views/home.html'))
})

app.get('/about', (req, res)=>{
    res.send('Hola estás en about');
})

app.get('/contact', (req, res)=>{
    res.send('Hola estamos en contacto');
})