const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const url = 'mongodb+srv://vnchumack:jeUiloGHx7gn7Rz9@cluster0.i1lbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(url, {dbName: "Shop"});

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: String,
  price: Number,
  rating: Number,
  title: String,
  type: String
});
const productModel = mongoose.model('products', ProductSchema, 'Products');

app.get('/getProducts', (req, res) => {
  productModel.find()
              .then(products => res.json(products))
              .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running!");
});