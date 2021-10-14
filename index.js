/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HttpConnect from './src/Library/Connect/HttpConnect.js';

/* eslint-disable no-unused-vars */
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

app.listen('3000', () => {
    console.log('Server is running on port 3000 kaa');
})

const container = document.getElementById('root')
const element = document.getElementById(App)

ReactDOM.render(element, container)

reportWebVitals();