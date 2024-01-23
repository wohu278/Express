require("dotenv").config()

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {

    res.send("<h1>Hola Mundoooo</h1><p>");
    
});

//console.log(process.env.ENVIOR); //Si tenemos el .env, nos da ese valor del fichero

app.get("/env", (req, res) => {

    const t2 = "<h1>" + process.env.MYSQL_HOST + "</h1>"
    const t1 = "<h1>" + process.env.MYSQL_PASS + "</h1>"
    const t3 = "<h1>" + process.env.MYSQL_USER + "</h1>"

    res.send(t1 + t2 + t3);

    
});

app.get("/about", (req, res) => {

    res.send("<h1>Acerca de...</h1>");
    
});


app.listen(PORT);

console.log("Servidor en puerto", PORT);
