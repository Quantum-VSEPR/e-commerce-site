import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRouter.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use("/api/products", productRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(port, console.log(`Server running on port ${port}`));
