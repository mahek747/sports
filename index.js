const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/database/dbconnection");
const routes = require("./src/routes/v1");
const config = require("./src/config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended:false}));

app.use(bodyParser.json());

app.use("/v1", routes);

app.use((req, res, next) =>{
    next(new Error("Route not found!"));
});

connectDB();

const server = http.createServer(app);

server.listen(config.port, () =>{
    console.log(`Server listing port number ${config.port}`);
});