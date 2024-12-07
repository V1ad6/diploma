const mongoose = require('mongoose');
const url = 'mongodb+srv://vnchumack:jeUiloGHx7gn7Rz9@cluster0.i1lbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const start = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected')
  } catch(e) {
    console.log(e.message);
  }
}

const stop = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected');
  } catch(e) {
    console.log(e.message);
  }
}

start().then(() => {
  setTimeout(stop, 5000);
});