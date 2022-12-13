const express = require('express');
const app = express();
const port = 3004;
const ejs = require('ejs');
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send('<h1>This is the main page</h1>');
})
app.get('/', (req, res)=>{

})
app.get('/', (req, res)=>{

})
app.get('/', (req, res)=>{

})
app.get('/', (req, res)=>{

})
app.get('/', (req, res)=>{

})
app.get('/', (req, res)=>{

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})