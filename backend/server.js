import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoute from './routes/productRoutes.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('getting....');
});

app.use('/api/products', productRoute);

app.listen(PORT, () => {
    console.log('running');
});
