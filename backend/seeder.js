import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/user.js';
import Order from './models/order.js';
import Product from './models/product.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;
		const sampleProducts = products.map(p => ({...p, user: adminUser}));

		await Product.insertMany(sampleProducts);
		console.log('Inserted data');
		process.exit();

	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const deleteData = async () => {
	try {
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();
		console.log('Deleted data');
		process.exit();

	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};


if (process.argv[2] === '-d') {
	deleteData();
} else {
	importData();
}
