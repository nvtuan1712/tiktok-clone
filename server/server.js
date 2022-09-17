const express = require('express');
const mongoose = require('mongoose');
const app = express();

const UserModel = require('./models/User')

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/tiktok", {
    useNewUrlParser: true,
})

app.get('/', async (req, res) => {
    const user = new UserModel({ firstname: "Nguyễn", lastname: "Thu"})

    try {
        await user.save()
        res.send('hello')
    } catch (error) {
        console.log(error);
    }
})

app.listen(3001, () => {
    console.log("Server running on port 3001...");
})