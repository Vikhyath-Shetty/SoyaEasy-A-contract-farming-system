const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

//connecting to the database
connectDB();

//middleware
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
