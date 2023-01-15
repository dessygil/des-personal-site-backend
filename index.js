const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require("mongoose")
const jobsRoute = require("./routes/jobs");


mongoose.set('strictQuery', false);

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => {
    console.log(err)
});

app.use("/api/jobs", jobsRoute);

app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'name of your app',
            version: '0.1.0'
        }
    });

});


app.listen(process.env.PORT || 5000, () => {
    console.log("Connected to port 5000");
});
