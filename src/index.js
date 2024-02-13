import express from "express";
const v1Router = require("./v1/routes");
import mysql from "mysql2/promise"

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req, res) => {
    res.send("<h1>hello world</h1>");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
