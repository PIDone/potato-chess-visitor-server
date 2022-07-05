const express = require("express");
const fs = require("fs");

var views = 0;

const app = express();

app.get("/", (req, res) => {
    views++;
    // fs.readFile("visitors.txt", "utf8", (err, data) => {
        // let after = (parseInt(data) + 1).toString();
        // fs.writeFile("visitors.txt", after, err => { });
        res.send(views.toString());
    // });
});
app.get("/query", (req, res) => {
    // fs.readFile("visitors.txt", "utf8", (err, data) => {
    //     res.send(data);
    // });
    res.send(views.toString());
});

app.listen(process.env.PORT || 3000, () => { });