const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen("3000"); // two arguments are not mandatory

app.use(bodyParser.urlencoded({ extended: true }));

const homePage = (req, res) => {
  const data = "<h1>Latha</h1>";
  res.send(data);
};
const calculatorPage = (req, res) => {
  res.sendFile(__dirname + "/index.html");
};
const calulation =  (req, res) => {
    console.log(req.body)
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    res.send("Calculation"+result);
  };
app.get("/", calculatorPage); // can point the function names as callback

app.get("/calculator", calculatorPage);
app.post("/",calulation)

