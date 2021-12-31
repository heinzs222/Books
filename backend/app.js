//import all lib
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

//setup connections
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to DB ⚡"))
    .catch(() => console.log("couldn't connect to DB "));
//setup middlewares
app.use(cors()); // CORS => cross origin resource sharing; //share frontend <->backend
app.use(express.json());
//setup routes
app.use("/api/auth", require("./routes/user"));
app.use("/api/toys", require("./routes/toy"));
//start listening on server

const port = 3001;
app.listen(port, () => {
    console.log("server running...");
});
