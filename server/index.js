const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//Middlewares
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

//constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

//server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db")
  );
});
