const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://kariminshira:kvq8BaPCVx01XXzJ@cluster0.7dlxsvw.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

// app.listen(3000, () => console.log('Server running on port 3000'));
const host = '127.0.0.1'; // Bind to the local loopback interface
const port = 3000;
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});