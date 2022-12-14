const express = require('express');
const app = express();
const port = 3004;
const ejs = require('ejs');
const pmysql = require('promise-mysql')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

var pool;
var employeeList = [];
var role1 = "manager";
var role2 = "employee";

pmysql.createPool({
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
            employeeList = data
            res.render('employees', { employees: data })
        })
        .catch(error => {
            reject(error)
        });
})
app.get('/employees/edit/:eid', (req, res) => {
    var employee = employeeList.find((employee) => {
        if (employee.eid == req.params.eid) {
            return employee
        }
    })

    if (employee != undefined) {
        res.render('edit', {
            empId: employee.eid,
            empSalary: employee.salary,
            empName: employee.ename,
            empRole: employee.role
        })
    }
    else {
        res.send("Error found.")
    }

})
app.post('/employees/edit/:eid', (req, res) => {
    //var role = req.body.role;
    var employee = employeeList.find((employee) => {
        if (employee.eid == req.params.eid) {
            return employee
        } else {
            
        }
    })

    if (req.body.ename.length < 4) {
        
    } 
    else if(req.body.role.toLowerCase() == role1 || req.body.role.toLowerCase() == role2)
    {
        
    }
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