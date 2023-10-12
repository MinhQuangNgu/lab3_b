const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
const router = require('./router/index');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
    .then((res) => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(`your error :${err}`);
    });

router(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('connect to port ', PORT);
});