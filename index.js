const express = require('express');
const app = express();
const port = 3004;
const ejs = require('ejs');
const pmysql = require('promise-mysql')
app.set('view engine', 'ejs');

var pool;

pmysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proj2022'
})
.then(p => {
    pool = p
})
.catch(e => {
    console.log("pool error:" + e)
})

app.get('/', (req, res) => {
    res.render('home')
    //res.send('<h1>This is the main page</h1>');
})
app.get('/employees', (req, res) => {
    //res.render('employees')
    pool.query('SELECT * FROM employee')
    .then((data) => {
        res.render('employees', {"employees": data})
    })
    .catch(error => {
        reject(error)
    })
})
app.get('/employees/edit/:eid', (req, res) => {
    res.render('edit')
})
app.post('/employees/edit/:eid', (req, res) => {
    console.log('test')
})
app.get('/depts', (req, res) => {
    res.render('depts')
})
app.get('/depts/delete/:did', (req, res) => {
    res.render('delete')
})
app.get('/employeesMongoDB', (req, res) => {
    res.render('employeesMongoDB')
})
app.get('/employeesMongoDB/add', (req, res) => {
    res.render('add')
})
app.post('/employeesMongoDB/add', (req, res) => {
    console.log('test')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})