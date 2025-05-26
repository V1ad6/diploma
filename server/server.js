const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const url = 'mongodb+srv://vnchumack:jeUiloGHx7gn7Rz9@cluster0.i1lbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const { productModel, categoryModel, orderModel, reportModel } = require('./models.js')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(url, {dbName: "Shop"});

app.get('/getProducts', (req, res) => {
  productModel.find()
              .then(products => res.json(products))
              .catch(err => res.json(err));
});

app.get('/getCategories', (req, res) => {
  categoryModel.find()
              .then(categories => res.json(categories))
              .catch(err => res.json(err));
});

app.post('/order', (req, res) => {
  const order = new orderModel({
    username: req.body.username || "unknown",
    products: req.body.products,
    totalPrice: req.body.totalPrice
  });

  order.save();
});

app.post('/sendFeedback', (req, res) => {
  const report = new reportModel({
    username: req.body.username || "unknown",
    email: req.body.email,
    text: req.body.text
  });

  report.save();
});

app.listen(3001, () => {
  console.log("server is running!");
});