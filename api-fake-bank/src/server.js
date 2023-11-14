const express = require('express');
const app = express();
const port = 5000;

const products = require('../data/products.json');
const menu = require('../data/menu.json');
const home = require('../data/home.json');
const extract = require('../data/extract.json');

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/menu', (req, res) => {
    res.json(menu);
});

app.get('/api/home', (req, res) => {
    res.json(home);
});

app.get('/api/extract', (req, res) => {
    res.json(extract);
});

app.listen(port, () => {
    console.log("A API está ligada na porta 5000");
});