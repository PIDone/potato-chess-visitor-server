const express = require("express");
var views = 0;
const app = express();

app.get("/", (req, res) => {
    views++;
    res.send(views.toString());
});
app.get("/query", (req, res) => {
    res.send(views.toString());
});

app.listen(process.env.PORT || 3000, () => { });