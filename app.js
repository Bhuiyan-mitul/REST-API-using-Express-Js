const express = require('express');
const app = new express;

app.get('/', (req, res) => {
    res.send("This is root path");
})
app.get('/anotherPath', (req, res) => {
    res.send("This is another path")
})

app.listen(3000);