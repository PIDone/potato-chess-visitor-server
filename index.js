const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile("visitors.txt", "utf8", (err, data) => {
        let after = (parseInt(data) + 1).toString();
        fs.writeFile("visitors.txt", after, err => { });
        res.send(after);
    });
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});