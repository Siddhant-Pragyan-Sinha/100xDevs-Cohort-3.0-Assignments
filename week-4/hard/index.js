const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/api/users", userRoutes);  // User routes
app.use("/api/todos", todoRoutes);  // Todo routes
app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

