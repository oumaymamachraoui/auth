const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT;

const connect = require("./config/ConnectDb");
connect();

app.use("/api/user", require("./routes/user"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port: ${PORT}`);
});
