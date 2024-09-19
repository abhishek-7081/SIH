const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


// 
const apiRoutes = require('./routes/api');
// 





//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));


// 
app.use('/api', apiRoutes);
// 

// endpoint of doctors list
// Example Express.js Route
app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find(); // Fetch all doctors
    res.json(doctors); // Send the data as JSON
  } catch (error) {
    res.status(500).send("Server error");
  }
});



//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
