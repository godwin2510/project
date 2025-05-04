const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// MongoDB connection URI
const MONGODB_URI = "mongodb://localhost:27017/your_database_name";



app.post('/api',(req,res)=>{

 const {name,age}=req.body

 console.log(name)

 




})






// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


