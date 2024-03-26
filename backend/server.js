import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRouter.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoute);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, console.log(`Server running on port ${port}`));
