import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: String,
  price: Number,
  rating: Number,
  title: String,
  type: String
});
export const productModel = mongoose.model('products', ProductSchema, 'Products');

const CategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
});
export const categoryModel = mongoose.model('categories', CategorySchema, 'Categories');

const OrderSchema = new mongoose.Schema({
  username: String,
  products: Array,
  totalPrice: Number
});
export const orderModel = mongoose.model('orders', OrderSchema, 'Orders');

const ReportSchema = new mongoose.Schema({
  username: String,
  email: String,
  text: String
});
export const reportModel = mongoose.model('reports', ReportSchema, 'Reports');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
export const userModel = mongoose.model('users', UserSchema, 'Users');