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

app.listen(process.env.PORT || 3000, () => { });