const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {

    if (err) {
        console.log("Database connection failed");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    res.send("Deployed by Jenkins CI/CD Pipeline");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
