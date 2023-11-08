import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	name: {
		required: true,
		type: String,
	},
	rating: {
		type: Number,
		required: true,
	},
	comment: {
		required: true,
		type: String,
	},
}, {
	timestamps: true,
});

const productSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	name: {
		required: true,
		type: String,
	},
	image: {
		required: true,
		type: String,
	},
	brand: {
		required: true,
		type: String,
	},
	category: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
	reviews: [reviewSchema],
	rating: {
		required: true,
		type: Number,
		default: 0,
	},
	numReviews: {
		required: true,
		type: Number,
		default: 0,
	},
	price: {
		required: true,
		type: Number,
		default: 0,
	},
	countInStock: {
		required: true,
		type: Number,
		default: 0,
	},
}, {
	timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;  
