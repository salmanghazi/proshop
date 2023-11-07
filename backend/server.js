import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
import connectDB from './config/db.js';

connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('getting....');
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.send(product);
});

app.listen(PORT, () => {
    console.log('running');
});
