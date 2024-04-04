import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import bodyParser from "body-parser"

import path from 'path'






app.use(bodyParser.json({ limit: '10mb' })); // Adjust limit as needed

app.use(bodyParser.urlencoded({ extended: true }));


const app=express()


dotenv.config()

connectDB();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//all routes from here
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
//static files

app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
});


const PORT=process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
    );
  });
  
