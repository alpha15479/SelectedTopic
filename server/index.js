const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: "employeeSystem"
})

app.get('/employee', (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query("INSERT INTO employee (name, age, country, position, salary) VALUES(?,?,?,?,?)", [name, age, country, position, salary],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserted")
            }
        }
    );
})

app.listen('3001', () => {
    console.log('Server is running on port 3001 kaa');
})