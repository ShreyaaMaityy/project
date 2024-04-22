const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());

app.use('/api',router);
mongoose
.connect(
    "mongodb+srv://admin:Jnw6IKNJ6e5Q108v@cluster0.fogswya.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
}).catch((err) => console.log(err));

//Jnw6IKNJ6e5Q108v