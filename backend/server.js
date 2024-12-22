const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port =  5000;
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const cors = require('cors');

//connecting to the database
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.use("/api/contracts", require("./routes/contractRoutes"));
app.use("/api/applications",require("./routes/applicationRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
