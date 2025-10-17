require("dotenv").config()
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const fileaccess = require("./src/router/FileAccessRouter");
const dbConn = require("./src/config/dbConn");
const userRouter = require("./src/router/userRouter")
const productRouter = require("./src/router/productRouter")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
   origin: "http://localhost:5173", // frontend URL
  credentials: true
}))
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(fileaccess);
app.use(userRouter)
app.use(productRouter)


const PORT = 4000;

dbConn().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
