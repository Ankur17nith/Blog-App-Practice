const express = require('express');
const app = express();
const path = require('path');
const userRoute =require('./routes/user')
const mongoose = require('mongoose')

const PORT = 8002;

mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e)=>{
    console.log("MongoDb is connected")
})

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('home');
});

app.use("/user", userRoute)

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));